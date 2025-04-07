import {
	BellIcon,
	BookOpenIcon,
	ClockIcon,
	UsersIcon,
} from "@heroicons/react/20/solid";
import { useMemo } from "react";
import { Card } from "~/components/shared/card";
import { useSchedule } from "~/hooks/use-schedule";
import type { Schedule, Timestamp } from "~/types/schedule";

const ClassBento = () => {
	const { schedule } = useSchedule();

	const todayClasses = useMemo(() => {
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
		<div className="md:row-span-2">
			<Card className="h-full p-4 bg-gray-100 border-gray-200 dark:border-zinc-800 dark:bg-zinc-900/50">
				<h2 className="text-xl font-semibold">Today&apos;s classes</h2>
				<div className="h-0.5 w-full bg-gray-200 dark:bg-zinc-800 my-4" />
				<div className="space-y-4 overflow-y-auto max-h-[calc(100vh-20rem)] pr-2 scrollbar-hide">
					{todayClasses.length !== 0 ? (
						todayClasses.map((course) => (
							<Card key={course.id}>
								<div className="flex gap-4 p-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
										<BellIcon className="h-6 w-6 text-green-600" />
									</div>
									<div className="flex-1">
										<div className="mb-2 flex items-center justify-between">
											<h3 className="font-semibold">{course.course_name}</h3>
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
			</Card>
		</div>
	);
};

export default ClassBento;
