import { predefinedColors } from "./colors";
import type { Schedule, TimetableEvent } from "~/types/schedule";

function getEventsFromSchedule(schedule: Schedule): TimetableEvent[] {
	const events: TimetableEvent[] = [];

	for (const weekTime of schedule.timestamps) {
		events.push({
			title: schedule.course_code,
			color:
				schedule.color ||
				predefinedColors[Math.floor(Math.random() * predefinedColors.length)],
			weekTime: weekTime,
		});
	}

	return events;
}

export default function getEventsFromSchedules(
	schedules: Schedule[],
): TimetableEvent[] {
	let events: TimetableEvent[] = [];

	for (const schedule of schedules) {
		events = [...events, ...getEventsFromSchedule(schedule)];
	}

	return events;
}
