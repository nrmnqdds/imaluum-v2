import moment from "moment";
import type { TimetableConfig, TimetableEvent } from "~/types/schedule";
import range from "~/utils/range";
import TimetableEventBlock from "./TimetableEventBlock";
import TimetableRow from "./TimetableRow";
import TimetableWeekDays from "./TimetableWeekDays";

interface TimetableProps {
	events: TimetableEvent[];
}

export default function Timetable({ events }: TimetableProps) {
	function getTimetableConfig(): TimetableConfig {
		let startDay = 0;
		let endDay = 6;
		let startHour = 8;
		let endHour = 23;

		for (const event of events) {
			if (event.weekTime.day < startDay) startDay = event.weekTime.day;
			if (event.weekTime.day > endDay) endDay = event.weekTime.day;
			const x = moment(event.weekTime.start, "HH:mm:ss").get("hours");
			if (x < startHour) startHour = x;
			const y = moment(event.weekTime.end, "HH:mm:ss").get("hours");
			if (y > endHour) endHour = y;
		}

		startHour = Math.max(startHour - 1, 0);
		endHour = Math.min(endHour + 2, 23);

		return {
			startDay,
			endDay,
			startHour,
			endHour,
		};
	}

	const config = getTimetableConfig();

	return (
		<div className="relative h-full bg-background">
			<TimetableWeekDays startDay={config.startDay} endDay={config.endDay} />
			<div className="">
				{range(config.startHour, config.endHour).map((hour, index) => (
					<TimetableRow
						key={hour}
						hour={hour}
						showHour={index !== 0}
						numberOfDays={config.endDay - config.startDay + 1}
					/>
				))}
				<div className="absolute top-0 bottom-0 left-0 -right-px sm:pl-12">
					<div className="relative w-full h-full">
						{events.map((event) => (
							<TimetableEventBlock
								key={event.id}
								event={event}
								config={config}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
