import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { GetResult } from "~/utils/scraper/result";
import { GetToken } from "~/utils/token";

export const fetchResult = createServerFn("GET", async () => {
	const token = GetToken();

	if (!token) {
		throw redirect({
			to: "/",
		});
	}
	const res = await GetResult(token);

	if (res.error || !res.data) {
		console.log("result error: ", res);
		return null;
	}

	const json = res.data;

	return json;
});
