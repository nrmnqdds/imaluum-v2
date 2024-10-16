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
};

export type Timestamp = {
  start: string;
  end: string;
  day: number;
};
