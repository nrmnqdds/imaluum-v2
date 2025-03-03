export type Result = {
	id: string;
	session_name: string;
	session_query: string;
	gpa_value: string;
	cgpa_value: string;
	status: string;
	credit_hours: string;
	remarks?: string;
	result: {
		id: string;
		course_code: string;
		course_name: string;
		course_grade: string;
		course_credit: string;
	}[];
};
