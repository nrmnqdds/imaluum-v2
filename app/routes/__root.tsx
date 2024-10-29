import { createRootRouteWithContext } from "@tanstack/react-router";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import appCss from "~/styles/app.css?url";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		meta: () => [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Simplified i-Ma'luum",
				description: "A simplified version of i-Ma'luum for students.",
			},
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
		component: RootComponent,
		links: () => [{ rel: "stylesheet", href: appCss }],
		// scripts: () => [
		// 	{
		// 		src: "https://umami.mallam.chat/getinfo",
		// 		type: "module",
		// 		defer: true,
		// 		datawebsiteid: "45609499-5b7c-451e-9683-4ef520bae636",
		// 	},
		// ],
	},
);

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<Html lang="en">
			<Head>
				<Meta />
			</Head>
			<Body className="scroll-smooth">
				<ThemeProvider attribute="class" defaultTheme="dark">
					<main className="relative isolate overflow-hidden bg-card min-h-screen">
						{children}
					</main>
					<ScrollRestoration />
					<Scripts />
				</ThemeProvider>
			</Body>
		</Html>
	);
}
