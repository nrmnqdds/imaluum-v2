import { Button } from "~/components/shared/button";
import { Input } from "~/components/shared/input";
import useProfile from "~/hooks/use-profile";
import useResult from "~/hooks/use-result";
import useSchedule from "~/hooks/use-schedule";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import * as z from "zod";
import { createServerFn } from "@tanstack/start";
import { FormEventHandler, useState } from "react";
import { request } from "undici";

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
	const { reset: ProfileReset, setProfile } = useProfile();
	const { reset: ScheduleReset } = useSchedule();
	const { reset: ResultReset } = useResult();

	const router = useRouter();

	const loginUser = createServerFn("POST", async (credentials: Credentials) => {
		const res = await request("https://api.nrmnqdds.com/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		});

		const json = (await res.body.json()) as unknown as TLoginResponse;

		setProfile({
			matricNo: json.data.username,
			name: "",
			imageURL: "",
		});
	});

	const handleLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			username: { value: string };
			password: { value: string };
		};
		const username = target.username.value;
		const password = target.password.value;

		await loginUser({ username, password });
	};

	// const onSubmit = (values: z.infer<typeof formSchema>) => {
	//   ProfileReset();
	//   ScheduleReset();
	//   ResultReset();
	//   toast.promise(loginMutation.mutateAsync(values), {
	//     // Pass the required properties to mutateAsync
	//     loading: "Logging in...",
	//     success: "Logged in successfully.",
	//     error: "Invalid credentials.",
	//   });
	// };
	//

	return (
		<form
			method="POST"
			onSubmit={handleLogin}
			className="space-y-2 mt-10 w-fit"
		>
			<div className="flex items-center justify-center gap-3">
				<Input placeholder="Matric Number" />
				<Input placeholder="Password" type="password" />
			</div>
			<Button type="submit" className="float-right w-24">
				<span className="text-zinc-900 dark:text-white">Login</span>
			</Button>
		</form>
	);
};

export default LoginForm;
