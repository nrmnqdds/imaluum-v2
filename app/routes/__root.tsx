import { createRootRouteWithContext } from "@tanstack/react-router";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import appCss from "~/styles/app.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { NotFound } from "~/components/shared/not-found";
import { DefaultCatchBoundary } from "~/components/shared/default-catch-boundary";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
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
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
      scripts: [
        {
          src: "https://beamanalytics.b-cdn.net/beam.min.js",
          "data-token": "09a05d6b-9ccf-4902-8ad0-e623689d586a",
          async: true,
        },
        {
          src: "https://beamanalytics.b-cdn.net/beam.min.js",
          "data-token": "09a05d6b-9ccf-4902-8ad0-e623689d586a",
          async: true,
        },
        // 				import.meta.env.DEV
        // 					? {
        // 							type: "module",
        // 							children: `import RefreshRuntime from "/_build/@react-refresh";
        // RefreshRuntime.injectIntoGlobalHook(window)
        // window.$RefreshReg$ = () => {}
        // window.$RefreshSig$ = () => (type) => type`,
        // 						}
        // 					: {},
      ],
    }),
    component: RootComponent,
    // notFoundComponent: () => <NotFound />,
    errorComponent: (props) => {
      return (
        <RootDocument>
          <DefaultCatchBoundary {...props} />
        </RootDocument>
      );
    },
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
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body className="scroll-smooth">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="relative isolate min-h-screen overflow-hidden bg-background">
            {children}
          </main>
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
