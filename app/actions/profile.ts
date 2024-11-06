import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { BACKEND_URL } from "~/constants";
import type { StudentInfo } from "~/types/student";
import { GetToken } from "~/utils/token";

type TProfileResponse = {
	status: number;
	message: string;
	data: {
		image_url: string;
		name: string;
		matric_no: string;
	};
};

export const fetchProfile = createServerFn(
	"GET",
	async (): Promise<StudentInfo | null> => {
		const token = GetToken();

		if (!token) {
			throw redirect({
				to: "/",
			});
		}

		const res = await fetch(`${BACKEND_URL}/api/profile`, {
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				Cookie: `MOD_AUTH_CAS=${token}`,
			},
		});

		if (!res.ok) {
			console.log("profile error: ", res);
			return null;
		}

		const json = (await res.json()) as unknown as TProfileResponse;

		return json.data;
	},
);
