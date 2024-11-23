import useResult from "~/hooks/use-result";
import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";

const CGPAChart = () => {
	const { result } = useResult();

	const filteredResult = result?.filter(
		(cgpa) => cgpa.cgpa_value && cgpa.gpa_value,
	);

	const data = filteredResult?.map((cgpa) => {
		return {
			name: cgpa.session_name,
			CGPA: cgpa.cgpa_value,
			GPA: cgpa.gpa_value,
		};
	});

	return result === null ? (
		<div className="w-full h-full flex items-center justify-center">
			<h1 className="text-white font-bold text-center text-xs sm:text-lg">
				You have not taken any exams yet!
			</h1>
		</div>
	) : (
		<div className="flex items-center justify-center h-[200px] w-full ">
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<Tooltip
						content={({ active, payload }) => {
							if (active && payload && payload.length) {
								return (
									<div className="rounded-lg border bg-background p-2 shadow-sm bg-zinc-100 dark:bg-zinc-900">
										<div className="grid grid-cols-2 gap-2">
											<div className="flex flex-col">
												<span className="text-[0.70rem] uppercase text-muted-foreground">
													CGPA
												</span>
												<span className="font-bold text-muted-foreground">
													{payload[0].value}
												</span>
											</div>
											<div className="flex flex-col">
												<span className="text-[0.70rem] uppercase text-muted-foreground">
													GPA
												</span>
												<span className="font-bold">{payload[1].value}</span>
											</div>
										</div>
									</div>
								);
							}

							return null;
						}}
					/>
					<YAxis />
					<Area
						type="monotone"
						dataKey="CGPA"
						stroke="#a4f6ce"
						fill="#00928F"
					/>
					<Area type="monotone" dataKey="GPA" stroke="#a4f6ce" fill="#00928F" />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CGPAChart;
