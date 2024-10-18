import { createLazyFileRoute } from "@tanstack/react-router";
import BentoLayout from "~/components/dashboard/bento";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col py-10 px-4 sm:px-6 lg:px-8">
      <BentoLayout />

      {/* <Advertisement className="w-full h-fit flex flex-col" /> */}
    </div>
  );
};

export const Route = createLazyFileRoute("/_home/dashboard")({
  component: () => DashboardPage,
});
