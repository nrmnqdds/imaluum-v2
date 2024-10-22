import moment from "moment";
import type { TimetableConfig, TimetableEvent } from "~/types/schedule";
import { cn } from "~/utils/cn";

interface TimetableEventBlockProps {
  event: TimetableEvent;
  config: TimetableConfig;
}

export default function TimetableEventBlock({
  event,
  config,
}: TimetableEventBlockProps) {
  const startMoment = moment(event.weekTime.start, "HH:mm:ss");
  const endMoment = moment(event.weekTime.end, "HH:mm:ss");
  const numberOfDays = config.endDay - config.startDay + 1;

  const top =
    64 *
      (startMoment.get("hours") +
        startMoment.get("minutes") / 60 -
        config.startHour) +
    32 +
    2;

  const height =
    64 *
      (endMoment.get("hours") +
        endMoment.get("minutes") / 60 -
        (startMoment.get("hours") + startMoment.get("minutes") / 60)) -
    5;

  const left = `calc(${(100 / numberOfDays) * (event.weekTime.day - config.startDay)}% + 2px)`;

  const width = `calc(${100 / numberOfDays}% - 5px)`;

  return (
    <button
      type="button"
      className={cn(
        "absolute rounded-md duration-100 p-1 space-y-2 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        [event.color],
      )}
      style={{
        top,
        height,
        left,
        width,
      }}
    >
      <p className="text-[8px] top-1 left-1 absolute flex sm:hidden">
        {moment(event.weekTime.start, "HH:mm:ss").format("h:mma")}
      </p>
      <p className="text-[8px] bottom-1 right-1 absolute flex sm:hidden">
        {moment(event.weekTime.end, "HH:mm:ss").format("h:mma")}
      </p>
      <p className="text-[8px] hidden sm:block md:text-xs md:font-bold">
        {event.title}
      </p>
      <div className="block sm:hidden">
        <p className="text-[8px] md:text-xs font-bold">{event.title}</p>
      </div>
      {/* <div className="block sm:hidden"> */}
      {/* 	<p className="text-[8px] md:text-xs font-bold"> */}
      {/* 		{event.title.split(" ")[0]} */}
      {/* 	</p> */}
      {/* 	<p className="text-[8px] md:text-xs font-bold"> */}
      {/* 		{event.title.split(" ")[1]} */}
      {/* 	</p> */}
      {/* </div> */}
      <p className="text-[8px] hidden sm:block md:text-xs md:font-bold">
        {moment(event.weekTime.start, "HH:mm:ss").format("h:mma")} -{" "}
        {moment(event.weekTime.end, "HH:mm:ss").format("h:mma")}
      </p>
    </button>
  );
}
