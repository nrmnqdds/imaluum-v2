import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { BACKEND_URL } from "~/constants";
import type { Result } from "~/types/result";
import { GetToken } from "~/utils/token";

type TResultResponse = {
	status: number;
	message: string;
	data: Result[];
};

export const fetchResult = createServerFn({
	method: "GET",
}).handler(async (): Promise<Result[]> => {
	const token = GetToken();

	if (!token) {
		throw redirect({
			to: "/",
		});
	}

	const res = await fetch(`${BACKEND_URL}/api/result`, {
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Cookie: `MOD_AUTH_CAS=${token}`,
		},
	});

	if (!res.ok) {
		console.log("result error: ", res);
		return [];
	}

	const json = (await res.json()) as unknown as TResultResponse;

	return json.data;
});
