import { Outlet, createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import ImaluumProvider from "~/components/providers/imaluum-provider";
import FinancialDialog from "~/components/shared/financial-dialog";
import Sidebar from "~/components/shared/sidebar";
import { useToken } from "~/hooks/use-token";

export const Route = createFileRoute("/_home")({
	component: () => {
		const { token } = useToken();
		const router = useRouter();

		useEffect(() => {
			if (!token) {
				router.navigate({
					to: "/",
				});
			}
		}, [token, router.navigate]);

		const messages = [
			"This is a simple version of i-Ma'luum for IIUM students.",
			"The website is under heavy development.",
			"Result section is under construction.",
			"Please be patient.",
		];

		return (
			<ImaluumProvider>
				<div className="top-0 bg-primary w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
					<ul className="flex items-center justify-center md:justify-start animate-infinite-scroll whitespace-nowrap">
						{[...messages, ...messages, ...messages].map((message, index) => (
							<li
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="inline-block mx-4 hover:opacity-50 transition-opacity duration-300"
							>
								{message}
							</li>
						))}
					</ul>
					<ul
						className="flex items-center justify-center md:justify-start animate-infinite-scroll whitespace-nowrap"
						aria-hidden="true"
					>
						{[...messages, ...messages, ...messages].map((message, index) => (
							<li
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="inline-block mx-4 hover:opacity-50 transition-opacity duration-300"
							>
								{message}
							</li>
						))}
					</ul>
				</div>
				{/* <header className="top-0 bg-primary w-full flex items-center justify-center"> */}
				{/*   <p className="text-foreground animate-marquee"> */}
				{/*     Result section is under construction. Please be passion because you */}
				{/*     are lowkey just a chill guy who is patient. */}
				{/*   </p> */}
				{/* </header> */}
				<Sidebar>
					<Outlet />
				</Sidebar>
				<FinancialDialog />
			</ImaluumProvider>
		);
	},
});
