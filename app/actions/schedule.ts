import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { BACKEND_URL } from "~/constants";
import type { Sessions } from "~/types/schedule";
import { GetToken } from "~/utils/token";

type TScheduleResponse = {
	status: number;
	message: string;
	data: Sessions[];
};

export const fetchSchedule = createServerFn({
	method: "GET",
}).handler(async (): Promise<Sessions[]> => {
	const token = GetToken();

	if (!token) {
		throw redirect({
			to: "/",
		});
	}

	const res = await fetch(`${BACKEND_URL}/api/schedule`, {
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Cookie: `MOD_AUTH_CAS=${token}`,
		},
	});

	if (!res.ok) {
		console.log("schedule error: ", res);
		return [];
	}

	const json = (await res.json()) as unknown as TScheduleResponse;

	return json.data;
});
