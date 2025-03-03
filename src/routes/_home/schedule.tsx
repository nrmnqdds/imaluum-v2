import { Bars3Icon } from "@heroicons/react/24/outline";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Timetable from "~/components/schedule";
import ScheduleSwitcher from "~/components/schedule/schedule-switcher";
import { useSchedule } from "~/hooks/use-schedule";
import { useSidebar } from "~/hooks/use-sidebar";
import type { Schedule } from "~/types/schedule";
import getEventsFromSchedules from "~/utils/event-schedule";

const SchedulePage = () => {
	const { schedule } = useSchedule();
	const { toggleIsOpen } = useSidebar();
	const [subjects, setSubjects] = useState<Schedule[]>(schedule[0].schedule);

	return (
		<section className="min-h-screen flex flex-col">
			<div className="w-full p-2 flex">
				<div className="flex-1 w-fit">
					<ScheduleSwitcher courses={schedule} setEvents={setSubjects} />
				</div>
				<div className="flex-1 flex items-center justify-end lg:hidden">
					<button type="button" onClick={() => toggleIsOpen()}>
						<Bars3Icon className="size-8 text-neutral-200" />
					</button>
				</div>
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
