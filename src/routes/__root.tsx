import { Outlet, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "~/components/shared/default-catch-boundary";

export const Route = createRootRoute({
	// notFoundComponent: () => <NotFound />,
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<main className="relative isolate min-h-screen overflow-hidden">
			{children}
		</main>
	);
}
