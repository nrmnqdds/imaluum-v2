import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { getHeaders } from "vinxi/http";
import ImaluumProvider from "~/components/providers/imaluum-provider";

/**
 * getSession is a function that checks if the user has a session
 * and redirects them to the home if they dont.
 */
const getSession = createServerFn("GET", async () => {
  const headers = getHeaders();

  if (!headers.cookie) {
    throw redirect({
      to: "/",
    });
  }

  const cookies = headers.cookie.split("; ");

  if (cookies.length === 0) {
    throw redirect({
      to: "/",
    });
  }

  const token = cookies.find((cookie) => cookie.startsWith("MOD_AUTH_CAS="));

  if (!token) {
    throw redirect({
      to: "/",
    });
  }

  return;
});

export const Route = createFileRoute("/_home")({
  component: () => {
    return (
      <ImaluumProvider>
        <Outlet />
      </ImaluumProvider>
    );
  },
  beforeLoad: async () => await getSession(),
});
