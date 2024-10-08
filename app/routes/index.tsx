import { createFileRoute, redirect } from "@tanstack/react-router";
import Hero from "~/components/landing-page/hero";
import { getHeaders } from "vinxi/http";
import { createServerFn } from "@tanstack/start";

/**
 * getSession is a function that checks if the user has a session
 * and redirects them to the dashboard if they do.
 */
const getSession = createServerFn("GET", async () => {
  const headers = getHeaders();

  if (!headers.cookie) {
    return;
  }

  const cookies = headers.cookie.split("; ");

  if (cookies.length === 0) {
    return;
  }

  const token = cookies.find((cookie) => cookie.startsWith("MOD_AUTH_CAS="));

  if (!token) {
    return;
  }

  throw redirect({
    to: "/dashboard",
  });
});

export const Route = createFileRoute("/")({
  component: Home,
  beforeLoad: async () => await getSession(),
});

function Home() {
  return <Hero />;
}
