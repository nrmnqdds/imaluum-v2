import {
	BellIcon,
	BookOpenIcon,
	ChevronDownIcon,
	ClockIcon,
	DocumentChartBarIcon,
	DocumentTextIcon,
	UsersIcon,
} from "@heroicons/react/20/solid";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Advertisement } from "~/components/dashboard/advertisement";
import CGPAChart from "~/components/dashboard/cgpa-chart";
import { Button } from "~/components/shared/button";
import Card from "~/components/shared/card";
import useProfile from "~/hooks/use-profile";
import useResult from "~/hooks/use-result";
import useSchedule from "~/hooks/use-schedule";
import type { Schedule, Timestamp } from "~/types/schedule";

const DashboardPage = () => {
	const { profile } = useProfile();
	const { schedule } = useSchedule();
	const { result } = useResult();

	const todayCreditHours = useMemo(() => {
		let creditHours = 0.0;

		for (const i of result) {
			for (const ii of i.result) {
				const floatchr = Number.parseFloat(ii.course_credit);
				creditHours += floatchr;
			}
		}

		return creditHours;
	}, [result]);

	const todayCourses = useMemo(() => {
		const currentDay = new Date().getDay();

		const latestSession = schedule[0];

		const todaysCourses = latestSession.schedule
			.map((course) => {
				const todayTimestamp = course.timestamps.find(
					(t) => t.day === currentDay,
				);
				return todayTimestamp ? { ...course, timestamp: todayTimestamp } : null;
			})
			.filter(
				(course): course is Schedule & { timestamp: Timestamp } =>
					course !== null,
			)
			.sort((a, b) => a.timestamp.start.localeCompare(b.timestamp.start));

		return todaysCourses;
	}, [schedule]);

	return (
		<section className="flex min-h-screen flex-col px-4 py-10 sm:px-6 lg:px-8">
			<div className="flex min-h-screen w-full flex-col gap-4 p-4 md:p-6">
				<div className="grid gap-4 md:grid-cols-2">
					<div>
						<h1 className="text-3xl font-bold">Hello, {profile.name} 👋</h1>
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-[2fr,3fr]">
					<div className="flex flex-col gap-4">
						<div>
							<h2 className="mb-4 text-xl font-semibold">
								Today&apos;s course
							</h2>
							<div className="space-y-4">
								{todayCourses.length !== 0 ? (
									todayCourses.map((course) => (
										<Card key={course.id}>
											<div className="flex gap-4 p-4">
												<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
													<BellIcon className="h-6 w-6 text-green-600" />
												</div>
												<div className="flex-1">
													<div className="mb-2 flex items-center justify-between">
														<h3 className="font-semibold">
															{course.course_name}
														</h3>
													</div>
													<div className="flex flex-col text-sm text-gray-500">
														<div className="flex items-center gap-1">
															<BookOpenIcon className="h-4 w-4" />
															{course.chr} credit hours
														</div>
														<div className="flex items-center gap-1">
															<ClockIcon className="h-4 w-4" />
															{course.venue}
														</div>
														<div className="flex items-center gap-1">
															<UsersIcon className="h-4 w-4" />
															{course.lecturer}
														</div>
													</div>
												</div>
											</div>
										</Card>
									))
								) : (
									<Card>
										<div className="p-4 text-center">
											<p className="text-gray-500">No classes today!</p>
										</div>
									</Card>
								)}
							</div>
						</div>
					</div>
					<div className="space-y-4">
						<h2 className="mb-4 text-xl font-semibold">Personal Profile</h2>
						<Card className="p-4 bg-zinc-900 border-zinc-800">
							<div className="mb-4 flex items-start justify-between">
								<div className="flex gap-4">
									<div className="h-16 w-16">
										<img alt="User avatar" src={profile.image_url} />
									</div>
									<div>
										<h2 className="text-xl font-semibold">{profile.name}</h2>
										<p className="text-sm text-gray-500">{profile.matric_no}</p>
										<div className="mt-4 flex gap-8">
											<div>
												<div className="text-2xl font-bold">
													{profile.level.split(" ")[1]}
												</div>
												<div className="text-sm text-gray-500">Level</div>
											</div>
											<div>
												<div className="text-2xl font-bold">
													{todayCreditHours}
												</div>
												<div className="text-sm text-gray-500">
													Credit Hours
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="grid gap-4 md:grid-cols-2">
								<a
									href="https://imaluum.iium.edu.my/MyAcademic/confirmation-sem"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Button className="bg-orange-400 border border-orange-600 hover:bg-orange-500 text-foreground w-full flex items-center justify-center">
										<DocumentTextIcon className="h-5 w-5" />
										<p>Confirmation Slip</p>
									</Button>
								</a>
								<a
									href="https://imaluum.iium.edu.my/examslip"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Button className="bg-purple-400 border border-purple-600 hover:bg-purple-500 text-foreground w-full flex items-center justify-center">
										<DocumentChartBarIcon className="h-5 w-5" />
										<p>Exam Slip</p>
									</Button>
								</a>
							</div>
						</Card>
						<h2 className="mb-4 text-xl font-semibold">Result Progress</h2>
						<Card className="bg-zinc-900 border-zinc-800">
							<CGPAChart />
						</Card>
					</div>
				</div>
			</div>

			<Advertisement className="flex h-fit w-full flex-col" />
		</section>
	);
};

export const Route = createFileRoute("/_home/dashboard")({
	component: () => <DashboardPage />,
});
