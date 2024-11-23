import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";
import { parse } from "node-html-parser";
import type { Result } from "~/types/result";
import { IMALUUM_RESULT_PAGE } from "~/constants";
import { log } from "~/utils/log";

export const Route = createAPIFileRoute("/api/result")({
  GET: async ({ request }) => {
    log("Hello /api/result");
    const token = request.headers.get("cookie");
    const data: Result[] = [];

    if (!token) {
      return json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
      const response = await fetch(IMALUUM_RESULT_PAGE, {
        method: "GET",
        headers: {
          Cookie: token,
        },
        credentials: "include",
      });

      if (!response.ok) {
        return json([], { status: 500 });
      }

      const body = await response.text();

      const root = parse(body);
      if (!root) {
        log("Failed to parse the page body");
        return json([], { status: 500 });
      }

      const sessionBody = root.querySelectorAll(
        ".box.box-primary .box-header.with-border .dropdown ul.dropdown-menu li[style*='font-size:16px']",
      );

      if (!sessionBody) {
        log("Failed to fetch session body");
        return json([], { status: 500 });
      }

      const sessionList = [];

      for (const element of sessionBody) {
        const row = element;
        const sessionName = row.querySelector("a")?.textContent.trim();
        const sessionQuery = row.querySelector("a")?.getAttribute("href");
        sessionList.push({ sessionName, sessionQuery });
      }

      sessionList.reverse();
      if (sessionList.length === 0) {
        // must return null, dont throw error
        // assuming the student is 1st year 1st sem and havent taken any exams yet
        return json([], { status: 200 });
      }

      const results: Result[] = await Promise.all(
        sessionList.map(({ sessionQuery, sessionName }) =>
          getResultFromSession(
            sessionQuery as string,
            sessionName as string,
            token,
          ),
        ),
      );

      log("Results: ", results);

      data.push(...results);

      // return {
      //   success: true,
      //   data: results,
      // };
    } catch (error) {
      log("Error fetching data:", error);
      return json([], { status: 500 });
    }

    // return json({ message: "Hello /api/route/result" });
    return json(data, { status: 200 });
  },
});

const getResultFromSession = async (
  session_query: string,
  session_name: string,
  cookie: string,
): Promise<Result> => {
  const url = `${IMALUUM_RESULT_PAGE}${session_query}`;

  log("URL: ", url);

  try {
    const response = await fetch(url, {
      headers: {
        Cookie: cookie,
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch result");
    }

    const body = await response.text();

    const root = parse(body);

    const table = root.querySelector(".box-body table.table.table-hover");
    const rows = table?.querySelectorAll("tr");

    if (!rows) throw new Error("Failed to fetch result");

    const result = [];

    const tds = rows[rows.length - 1].querySelectorAll("td");

    if (
      tds[0].textContent.trim() ===
      "Please contact finance division regarding tuition fees"
    ) {
      for (const row of rows) {
        const tds = row.querySelectorAll("td");

        // Check if tds array has enough elements
        if (tds.length >= 4) {
          const course_code = tds[0].textContent.trim();
          if (course_code.split(/\s{2,}/)[0] === "Total Credit Points") {
            break;
          }
          const course_name = tds[1].textContent.trim();
          const course_grade = tds[2].textContent.trim() || "N/A";
          const course_credit = tds[3].textContent.trim();
          result.push({
            course_code,
            course_name,
            course_grade,
            course_credit,
          });
        }
      }
      return {
        session_query,
        session_name,
        result,
        gpa_value: "N/A",
        cgpa_value: "N/A",
        status: "N/A",
        remarks: "Please contact finance division regarding tuition fees",
      };
    }

    const neutralized1 = tds[1].textContent.trim().split(/\s{2,}/) || [];
    const gpa_value = neutralized1[2];
    const status = neutralized1[3];
    const remarks = neutralized1[4];

    const neutralized2 = tds[3].textContent.trim().split(/\s{2,}/) || [];
    const cgpa_value = neutralized2[2];

    // Remove the last row
    rows.pop();

    for (const row of rows) {
      const tds = row.querySelectorAll("td");

      // Check if tds array has enough elements
      if (tds.length >= 4) {
        const course_code = tds[0].textContent.trim();
        const course_name = tds[1].textContent.trim();
        const course_grade = tds[2].textContent.trim() || "N/A";
        const course_credit = tds[3].textContent.trim();
        result.push({ course_code, course_name, course_grade, course_credit });
      }
    }

    return {
      session_query,
      session_name,
      result,
      gpa_value,
      cgpa_value,
      status,
      remarks,
    };
  } catch (err) {
    log("err", err);
    throw new Error("Failed to fetch result");
  }
};
