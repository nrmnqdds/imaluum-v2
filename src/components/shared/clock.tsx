import { useState, useEffect } from "react";
import { getDate } from "~/utils/time";

const Clock = () => {
	const [currentTime, setCurrentTime] = useState<string>("00:00:00 AM");

	useEffect(() => {
		const intervalId = setInterval(() => {
			const date = new Date();
			const hours = date.getHours() % 12 || 12;
			const minutes = date.getMinutes().toString().padStart(2, "0");
			const seconds = date.getSeconds().toString().padStart(2, "0");
			const amOrPm = date.getHours() >= 12 ? "PM" : "AM";
			setCurrentTime(`${hours}:${minutes}:${seconds} ${amOrPm}`);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);
	return (
		<div className="relative flex items-center gap-5 flex-1 text-xs md:text-sm">
			<h1 className="text-foreground font-bold">{getDate()}</h1>
			<h2 className="text-foreground font-bold">{currentTime}</h2>
		</div>
	);
};

export default Clock;
