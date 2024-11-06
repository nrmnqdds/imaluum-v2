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
				description: "A simplified version of i-Ma'luum for IIUM students.",
			},
			{
				rel: "icon",
				href: "/favicon.ico",
			},
			{ name: "twitter:title", content: "Simplified i-Ma'luum" },
			{
				name: "twitter:description",
				content: "A simplified version of i-Ma'luum for IIUM students.",
			},
			{ name: "twitter:creator", content: "@nrmnqdds" },
			{ name: "twitter:site", content: "@nrmnqdds" },
			{
				name: "twitter:image",
				content: "https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
				itemProp: "image",
			},
			{ name: "twitter:card", content: "summary_large_image" },
			{
				name: "og:description",
				content: "A simplified version of i-Ma'luum for IIUM students. ",
			},
			{
				name: "og:image",
				content: "https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
				itemProp: "image",
			},
			{ name: "og:type", content: "website" },
			{ name: "og:title", content: "Simplified i-Ma'luum" },
			{ name: "og:url", content: "https://imaluum.quddus.my" },
			{
				name: "msapplication-TileImage",
				content: "https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
			},
		],
		component: RootComponent,
		links: () => [{ rel: "stylesheet", href: appCss }],
		scripts: () => [
			{
				src: "https://beamanalytics.b-cdn.net/beam.min.js",
				async: true,
				datatoken: "09a05d6b-9ccf-4902-8ad0-e623689d586a",
			},
		],
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
	console.log(
		"%c Make iMaluum Great Again",
		'font-size: 5rem; text-align: center; color: #fcedd8; font-family: "Niconne", cursive; font-weight: 700; text-shadow: 5px 5px 0px #eb452b, 8px 8px 0px #efa032, 11px 11px 0px #46b59b, 14px 14px 0px #017e7f, 17px 17px 0px #052939;',
	);
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
