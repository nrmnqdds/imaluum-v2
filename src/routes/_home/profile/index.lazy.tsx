import { createLazyFileRoute } from "@tanstack/react-router";
import { ProfileTag } from "~/components/profile/card-tag";

export const Route = createLazyFileRoute("/_home/profile/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<ProfileTag />
		</div>
	);
}
