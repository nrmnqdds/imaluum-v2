import { createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
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
	],
	component: RootComponent,
	links: () => [{ rel: "stylesheet", href: appCss }],
});

// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<Html>
			<Head>
				<Meta />
			</Head>
			<Body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
					<ScrollRestoration />
					<Scripts />
				</ThemeProvider>
			</Body>
		</Html>
	);
}
