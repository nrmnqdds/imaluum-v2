import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { handleLogout } from "~/actions/logout";
import { Button } from "~/components/shared/button";

export const NotFound = () => {
	const router = useRouter();
	const queryClient = useQueryClient();
	return (
		<main className="bg-zinc-900 w-full h-screen flex flex-col items-center justify-center p-24">
			<p>Not found</p>
			<Button type="button" onClick={() => window.history.back()}>
				Go back
			</Button>
			<Button
				onClick={async () => {
					await handleLogout();
					queryClient.clear();
					router.navigate({
						to: "/",
					});
				}}
			>
				<span>Go to home</span>
			</Button>
		</main>
	);
};
