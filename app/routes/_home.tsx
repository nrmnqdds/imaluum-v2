import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import Sidebar from "~/components/shared/sidebar";
import FinancialDialog from "~/components/shared/financial-dialog";
import ImaluumProvider from "~/components/providers/imaluum-provider";
import { getCookie } from "vinxi/http";

/**
 * getSession is a function that checks if the user has a session
 * and redirects them to the home if they dont.
 */
const getSession = createServerFn("GET", async () => {
	const token = getCookie("MOD_AUTH_CAS");

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
				<header className="top-0 bg-primary w-full flex items-center justify-center">
					<p className="text-foreground animate-marquee">
						Result section is under construction. Please be passion because you
						are lowkey just a chill guy who is patient.
					</p>
				</header>
				<Sidebar>
					<Outlet />
				</Sidebar>
				<FinancialDialog />
			</ImaluumProvider>
		);
	},
	beforeLoad: async () => await getSession(),
});
