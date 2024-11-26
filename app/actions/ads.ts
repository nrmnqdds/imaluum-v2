import { createServerFn } from "@tanstack/start";
import { BACKEND_URL } from "~/constants";
import type { Advertisement as TAds } from "~/types/ads";

type TAdsResponse = {
	status: number;
	message: string;
	data: TAds[];
};

export const fetchAds = createServerFn({
	method: "GET",
}).handler(async () => {
	const res = await fetch(`${BACKEND_URL}/api/ads`);

	if (!res.ok) {
		console.log("ads error: ", res);
		return null;
	}

	const json = (await res.json()) as unknown as TAdsResponse;

	return json.data;
});
