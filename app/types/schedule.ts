export type Subject = {
	sessionName: string;
	id: string;
	courseCode: string;
	courseName: string;
	section: string;
	chr: string;
	color: string;
	timestamps: WeekTime;
	venue: string;
	lecturer: string;
};

export type WeekTime = {
	start: string;
	end: string;
	day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export type TimetableConfig = {
	startDay: number;
	endDay: number;
	startHour: number;
	endHour: number;
};

export type Courses = {
	schedule: Subject[];
	sessionName: string;
	sessionQuery: string;
};
