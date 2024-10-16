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
    ],
    component: RootComponent,
    links: () => [{ rel: "stylesheet", href: appCss }],
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
          <main className="relative isolate overflow-hidden bg-slate-100 dark:bg-zinc-900">
            {children}
          </main>
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </Body>
    </Html>
  );
}
