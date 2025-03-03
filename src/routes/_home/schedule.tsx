import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Timetable from "~/components/schedule";
import ScheduleSwitcher from "~/components/schedule/schedule-switcher";
import { useSchedule } from "~/hooks/use-schedule";
import type { Schedule } from "~/types/schedule";
import getEventsFromSchedules from "~/utils/event-schedule";

const SchedulePage = () => {
	const { schedule } = useSchedule();
	const [subjects, setSubjects] = useState<Schedule[]>(schedule[0].schedule);

	return (
		<section className="min-h-screen flex flex-col">
			<div className="w-fit p-2 flex gap-5">
				<ScheduleSwitcher courses={schedule} setEvents={setSubjects} />
			</div>
			<Timetable
				events={
					!subjects || subjects.length === 0
						? []
						: getEventsFromSchedules(subjects)
				}
			/>
		</section>
	);
};

export const Route = createFileRoute("/_home/schedule")({
	component: () => <SchedulePage />,
});
