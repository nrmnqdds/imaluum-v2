export type Result = {
  session_name: string;
  session_query: string;
  gpa_value: string;
  cgpa_value: string;
  status: string;
  remarks: string;
  result: {
    course_code: string;
    course_name: string;
    course_grade: string;
    course_credit: string;
  }[];
};
