import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	RouterProvider,
	createRouter as createTanStackRouter,
} from "@tanstack/react-router";
import { DefaultCatchBoundary } from "~/components/shared/default-catch-boundary";
import { ThemeProvider } from "./components/providers/theme-provider";
import { routeTree } from "./routeTree.gen";

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
	// defaultNotFoundComponent: () => <NotFound />,
	defaultErrorComponent: DefaultCatchBoundary,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="dark" storageKey="imaluum-theme">
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
