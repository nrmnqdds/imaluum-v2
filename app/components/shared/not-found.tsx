import { useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { deleteCookie } from "vinxi/http";
import { Button } from "~/components/shared/button";

export function NotFound() {
	const router = useRouter();

	const logoutSession = createServerFn("GET", async () => {
		deleteCookie("MOD_AUTH_CAS");

		return;
	});

	const handleLogout = async () => {
		await logoutSession();
		router.navigate({
			to: "/",
		});
	};

	return (
		<div className="space-y-2 p-2">
			<p>The page you are looking for does not exist.</p>
			<p className="flex flex-wrap items-center gap-2">
				<Button type="button" onClick={() => window.history.back()}>
					Go back
				</Button>
				<Button onClick={handleLogout}>
					<span>Go to home</span>
				</Button>
			</p>
		</div>
	);
}
