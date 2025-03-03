import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { Button } from "~/components/shared/button";
import { Input } from "~/components/shared/input";
import { useProfile } from "~/hooks/use-profile";
import { useResult } from "~/hooks/use-result";
import { useSchedule } from "~/hooks/use-schedule";
import { useToken } from "~/hooks/use-token";

const LoginForm = () => {
	const { reset: ProfileReset } = useProfile();
	const { reset: ScheduleReset } = useSchedule();
	const { reset: ResultReset } = useResult();
	const { setToken } = useToken();

	const router = useRouter();

	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: async ({
			username,
			password,
		}: { username: string; password: string }) => {
			const res = await fetch("https://api.quddus.my/api/login", {
				credentials: "include",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			const json = await res.json();

			if (!res.ok) {
				console.error("Error: ", json.message);
				toast.error("An error occurred. Please try again later.");
				return Promise.reject(json.message);
			}

			return json.data;
		},
		onSuccess: (data) => {
			ProfileReset();
			ScheduleReset();
			ResultReset();

			setToken(data.token);

			router.navigate({
				to: "/dashboard",
			});
		},
		onError: (err) => {
			console.error("Error: ", err);
			toast.error("An error occurred. Please try again later.");
		},
	});

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);

		const username = form.get("username") as string;
		const password = form.get("password") as string;

		await loginMutation.mutateAsync({ username, password });
	};

	return (
		<form onSubmit={handleLogin} className="mt-10 w-fit space-y-2">
			<div className="flex items-center justify-center gap-3">
				<Input
					name="username"
					placeholder="Matric Number"
					disabled={loginMutation.isPending}
				/>
				<Input
					name="password"
					placeholder="Password"
					type="password"
					disabled={loginMutation.isPending}
				/>
			</div>
			<Button
				type="submit"
				disabled={loginMutation.isPending}
				className="float-right"
			>
				<span className="text-foreground">
					{loginMutation.isPending ? "Logging in" : "Log in"}
				</span>
			</Button>
		</form>
	);
};

export default LoginForm;
