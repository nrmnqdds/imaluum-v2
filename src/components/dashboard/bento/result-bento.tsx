import Card from "~/components/shared/card";
import CGPAChart from "~/components/dashboard/cgpa-chart";

const ResultBento = () => {
	return (
		<div>
			<Card className="h-full p-4 bg-gray-100 border-gray-200 dark:border-zinc-800 dark:bg-zinc-900/50">
				<h2 className="text-xl font-semibold">Result Progress</h2>
				<div className="h-0.5 w-full bg-gray-200 dark:bg-zinc-800 my-4" />
				<CGPAChart />
			</Card>
		</div>
	);
};

export default ResultBento;
