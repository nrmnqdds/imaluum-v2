import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { NotFound } from "./components/shared/not-found";
import { routeTree } from "./routeTree.gen";
import { DefaultCatchBoundary } from "./components/shared/default-catch-boundary";

export function createRouter() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 3,
				refetchOnWindowFocus: false,
			},
		},
	});

	const router = createTanStackRouter({
		routeTree,
		context: { queryClient },
		defaultPreload: "intent",
		defaultNotFoundComponent: () => <NotFound />,
		defaultErrorComponent: DefaultCatchBoundary,
	});

	return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
