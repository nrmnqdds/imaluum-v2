import { useQueries } from "@tanstack/react-query";
import { predefinedColors } from "~/utils/colors";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { fetch } from "undici";
import LoadingScreen from "~/components//shared/loading-screen";
import { NotFound } from "~/components/shared/not-found";
import useProfile from "~/hooks/use-profile";
import useResult from "~/hooks/use-result";
import useSchedule from "~/hooks/use-schedule";
import type { Sessions } from "~/types/schedule";
import type { StudentInfo } from "~/types/student";
import { GetResult } from "~/utils/scraper/result";
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

type TScheduleResponse = {
	status: number;
	message: string;
	data: Sessions[];
};

const ImaluumProvider = ({ children }: { children: React.ReactNode }) => {
	const { profile, setProfile } = useProfile();
	const { result, setResult } = useResult();
	const { schedule, setSchedule } = useSchedule();

	const fetchProfile = createServerFn(
		"GET",
		async (): Promise<StudentInfo | null> => {
			const token = GetToken();

			if (!token) {
				throw redirect({
					to: "/",
				});
			}

			const res = await fetch("https://api.nrmnqdds.com/api/profile", {
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

	const fetchResult = createServerFn("GET", async () => {
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

	const fetchSchedule = createServerFn(
		"GET",
		async (): Promise<Sessions[] | null> => {
			const token = GetToken();

			if (!token) {
				throw redirect({
					to: "/",
				});
			}

			const res = await fetch("https://api.nrmnqdds.com/api/schedule", {
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					Cookie: `MOD_AUTH_CAS=${token}`,
				},
			});

			if (!res.ok) {
				console.log("schedule error: ", res);
				return null;
			}

			const json = (await res.json()) as unknown as TScheduleResponse;

			return json.data;
		},
	);

	const fetchImaluum = useQueries({
		queries: [
			{
				queryKey: ["profile"],
				queryFn: async () => {
					const res = await fetchProfile();
					if (!res) {
						throw new Error("Profile not found");
					}
					setProfile(res);
					return res;
				},
				enabled: !profile,
				retry: 3,
			},
			{
				queryKey: ["result"],
				queryFn: async () => {
					const res = await fetchResult();
					if (!res) {
						throw new Error("Result not found");
					}
					setResult(res);
					return res;
				},
				retry: 3,
				enabled: !result?.length,
			},
			{
				queryKey: ["schedule"],
				queryFn: async () => {
					const res = await fetchSchedule();
					if (!res) {
						throw new Error("Schedule not found");
					}
					const tweakedSchedule = res.map((item) => {
						return {
							...item,
							schedule: item.schedule.map((schedule) => {
								return {
									...schedule,
									color:
										schedule.color ||
										predefinedColors[
											Math.floor(Math.random() * predefinedColors.length)
										],
								};
							}),
						};
					});

					setSchedule(tweakedSchedule);
					return res;
				},
				retry: 3,
				enabled: !schedule?.length,
			},
		],
	});

	if (fetchImaluum.some((query) => query.isLoading)) {
		return <LoadingScreen />;
	}

	if (fetchImaluum.some((query) => query.isError)) {
		return <NotFound />;
	}

	if (profile && result?.length !== 0 && schedule?.length !== 0) {
		return children;
	}

	return <NotFound />;
};

export default ImaluumProvider;
