import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ResultSwitcher from "~/components/result/result-switcher";
import { useResult } from "~/hooks/use-result";
import type { Result } from "~/types/result";

const ResultPage = () => {
	const { result } = useResult();
	const [subjects, setSubjects] = useState<Result>(result[0]);

	const passedCount = subjects.result.reduce((count, subject) => {
		return count + (isPassed(subject.course_grade) ? 1 : 0);
	}, 0);

	const failedCount = subjects.result.length - passedCount;

	return (
		<main className="flex-1 flex flex-col gap-2 min-h-screen px-2">
			<div className="w-fit p-2 flex gap-5">
				<ResultSwitcher courses={result} setEvents={setSubjects} />
			</div>
			<div className="flex flex-col lg:flex-row gap-5 items-center justify-center w-full h-full rounded-xl border border-border p-4 bg-background">
				<div className="flex-1 flex flex-row items-center justify-center gap-5">
					<div className="flex flex-col gap-2 items-center justify-center bg-card p-4 font-semibold border-border rounded-xl border">
						<h1 className="text-zinc-300 text-xs lg:text-sm">
							Subjects Taken:
						</h1>
						<p className="text-zinc-100 text-lg lg:text-3xl">
							{subjects.result.length}
						</p>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center rounded-xl bg-cyan-500/10 p-4 text-sm font-semibold leading-6 text-cyan-600 dark:text-cyan-400 ring-1 ring-inset ring-cyan-500/20">
						<h1 className="text-xs lg:text-sm">Subjects Passed:</h1>
						<p className="text-lg lg:text-3xl">{passedCount}</p>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center rounded-xl bg-red-500/10 p-4 text-sm font-semibold leading-6 text-red-600 dark:text-red-400 ring-1 ring-inset ring-red-500/20">
						<h1 className="text-xs lg:text-sm">Subjects Failed:</h1>
						<p className="text-lg lg:text-3xl">{failedCount}</p>
					</div>
				</div>
				<div className="flex-1 flex flex-row items-center justify-center gap-5">
					<div className="flex flex-col gap-2 items-center justify-center p-4 font-semibold bg-card border-border rounded-xl border">
						<h1 className="text-zinc-300 text-xs lg:text-sm">Status:</h1>
						<p className="text-zinc-100 text-sm lg:text-xl">
							{subjects.status || "N/A"}
						</p>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center bg-card p-4 font-semibold border-border rounded-xl border">
						<h1 className="text-zinc-300 text-xs lg:text-sm">Remarks:</h1>
						{/* <p className="text-zinc-100 text-sm lg:text-xl"> */}
						{/* 	{subjects.remarks || "No Remarks"} */}
						{/* </p> */}
					</div>
				</div>
			</div>
			{/**/}
			<div className="flex flex-col items-center justify-center w-full h-full rounded-xl border border-border bg-background p-4">
				<div id="header" className="w-full flex flex-row mb-2 p-4">
					<div className="flex-1 w-fit flex items-center justify-start text-xs sm:text-sm">
						<p className="zinc-100 lg:pl-24">Subject Code</p>
					</div>
					<div className="flex-1 hidden sm:flex items-center justify-center text-center lg:justify-start text-xs sm:text-sm">
						<p className="zinc-100">Subject Name</p>
					</div>
					<div className="flex-1 flex items-center justify-center lg:justify-start text-xs sm:text-sm">
						<p className="zinc-100 lg:pl-24">Grade</p>
					</div>
					<div className="flex-1 flex flex-row items-center justify-start text-xs sm:text-sm">
						<p className="zinc-100">Status</p>
					</div>
				</div>

				<div className="flex flex-col gap-2 w-full">
					{subjects?.result.map((subject, index) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							id="subjects"
							className="w-full flex flex-row bg-card p-4 border-border rounded-xl border"
						>
							<div className="flex-1 w-fit flex items-center justify-start text-xs sm:text-sm">
								<p className="zinc-100 lg:pl-24">{subject.course_code}</p>
							</div>
							<div className="flex-1 hidden sm:flex items-center justify-start text-xs sm:text-sm">
								<p className="zinc-100">{subject.course_name}</p>
							</div>
							<div className="flex-1 flex items-center justify-center lg:justify-start text-xs sm:text-sm">
								<p className="zinc-100 lg:pl-24">{subject.course_grade}</p>
							</div>
							<div className="flex-1 flex items-center justify-start text-xs sm:text-sm">
								{isPassed(subject.course_grade) ? (
									<p className="w-fit rounded-full bg-cyan-500/10 px-3 py-1 font-semibold text-cyan-600 dark:text-cyan-400 ring-1 ring-inset ring-cyan-500/20">
										PASS
									</p>
								) : (
									<p className="w-fit rounded-full bg-red-500/10 px-3 py-1 font-semibold text-red-600 dark:text-red-400 ring-1 ring-inset ring-red-500/20">
										FAIL
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			{/*   </> */}
			{/* )} */}
		</main>
	);
};

const isPassed = (grade: string) => {
	switch (grade) {
		case "A":
		case "A-":
		case "B+":
		case "B":
		case "B-":
		case "C+":
		case "C":
		case "C-":
		case "PA":
		case "EX":
			return true;
		default:
			return false;
	}
};

export const Route = createFileRoute("/_home/result")({
	component: () => <ResultPage />,
});
