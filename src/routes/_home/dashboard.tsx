import { Bars3Icon } from "@heroicons/react/24/outline";
import { createFileRoute } from "@tanstack/react-router";
import { Advertisement } from "~/components/dashboard/advertisement";
import ClassBento from "~/components/dashboard/bento/class-bento";
import ProfileBento from "~/components/dashboard/bento/profile-bento";
import ResultBento from "~/components/dashboard/bento/result-bento";
import { TransitionWrapper } from "~/components/providers/transition-wrapper";
import { useProfile } from "~/hooks/use-profile";
import { useSidebar } from "~/hooks/use-sidebar";

const DashboardPage = () => {
	const { profile } = useProfile();
	const { toggleIsOpen } = useSidebar();

	return (
		<section className="flex min-h-screen flex-col px-4 py-10 sm:px-6 lg:px-8">
			<button
				className="fixed lg:hidden top-10 right-10 z-50"
				type="button"
				onClick={() => toggleIsOpen()}
			>
				<Bars3Icon className="w-10 h-10 text-neutral-200" />
			</button>
			<TransitionWrapper>
				<div className="flex min-h-screen w-full flex-col gap-4 p-4 md:p-6">
					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<h1 className="text-3xl font-bold">
								Hello, {profile?.name || "User"} 👋
							</h1>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-2 md:auto-rows-min">
						<ClassBento />
						<ProfileBento />
						<ResultBento />
					</div>
				</div>

				<Advertisement className="flex h-fit w-full flex-col" />
			</TransitionWrapper>
		</section>
	);
};

export const Route = createFileRoute("/_home/dashboard")({
	component: () => <DashboardPage />,
});
