import { useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "~/components/shared/button";
import { Input } from "~/components/shared/input";
import useProfile from "~/hooks/use-profile";
import useResult from "~/hooks/use-result";
import useSchedule from "~/hooks/use-schedule";
import { setCookie } from "vinxi/http";
import { request } from "undici";
import { BACKEND_URL } from "~/constants";

type TLoginResponse = {
	status: number;
	message: string;
	data: {
		username: string;
		token: string;
	};
};

type Credentials = {
	username: string;
	password: string;
};

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { profile, reset: ProfileReset, setProfile } = useProfile();
	const { reset: ScheduleReset } = useSchedule();
	const { reset: ResultReset } = useResult();

	const router = useRouter();

	const loginUser = createServerFn("POST", async (credentials: Credentials) => {
		const res = await request(`${BACKEND_URL}/api/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		});

		const json = (await res.body.json()) as unknown as TLoginResponse;

		setCookie("MOD_AUTH_CAS", json.data.token, {
			// Expires in 30 minutes
			expires: new Date(Date.now() + 30 * 60 * 1000),
		});

		return json;
	});

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);

		const username = form.get("username") as string;
		const password = form.get("password") as string;

		try {
			setIsLoading(true);
			const res = await loginUser({ username, password });

			ProfileReset();
			ScheduleReset();
			ResultReset();

			if (res.status === 200 || res.status === 201) {
				setProfile({ ...profile, matric_no: res.data.username });
				router.navigate({
					to: "/dashboard",
				});
			} else {
				console.log(res);
				toast.error(res.message);
			}
		} catch (err) {
			console.log(err);
			toast.error("An error occurred. Please try again later.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleLogin} className="mt-10 w-fit space-y-2">
			<div className="flex items-center justify-center gap-3">
				<Input
					name="username"
					placeholder="Matric Number"
					disabled={isLoading}
				/>
				<Input
					name="password"
					placeholder="Password"
					type="password"
					disabled={isLoading}
				/>
			</div>
			<Button type="submit" disabled={isLoading} className="float-right">
				<span className="text-foreground">
					{isLoading ? "Logging in" : "Log in"}
				</span>
			</Button>
		</form>
	);
};

export default LoginForm;
