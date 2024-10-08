import type { Courses } from "./schedule";

export type StudentInfo = {
	name: string;
	imageURL: string;
	matricNo: string;
};

export type Cgpa = {
	sessionName: string;
	gpaValue: string;
	cgpaValue: string;
};

export type Result = {
	sessionName: string;
	sessionQuery: string;
	gpaValue: string;
	cgpaValue: string;
	status: string;
	remarks: string;
	result: {
		courseCode: string;
		courseName: string;
		courseGrade: string;
	}[];
};

export type ImaluumData = {
	info: StudentInfo;
	courses: Courses[];
	results: Result[];
};
