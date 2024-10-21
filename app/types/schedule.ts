export type WeekTime = {
  start: string;
  end: string;
  day: number;
};

export type TimetableConfig = {
  startDay: number;
  endDay: number;
  startHour: number;
  endHour: number;
};

export type Sessions = {
  id: string;
  session_name: string;
  session_query: string;
  schedule: Schedule[];
};

export type Schedule = {
  id: string;
  course_code: string;
  course_name: string;
  section: number;
  chr: number;
  timestamps: Timestamp[];
  venue: string;
  lecturer: string;
  color: string;
};

export type Timestamp = {
  start: string;
  end: string;
  day: number;
};

export type TimetableEvent = {
  title: string;
  color: string;
  weekTime: WeekTime;
};
