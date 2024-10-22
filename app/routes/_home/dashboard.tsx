import { createFileRoute } from "@tanstack/react-router";
import { Advertisement } from "~/components/dashboard/advertisement";
import BentoLayout from "~/components/dashboard/bento";

const DashboardPage = () => {
	return (
		<section className="min-h-screen flex flex-col py-10 px-4 sm:px-6 lg:px-8">
			<BentoLayout />

			<Advertisement className="w-full h-fit flex flex-col" />
		</section>
	);
};

export const Route = createFileRoute("/_home/dashboard")({
	component: () => <DashboardPage />,
});
