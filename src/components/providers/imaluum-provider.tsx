import { useQueries } from "@tanstack/react-query";
// import { fetchResult } from "~/actions/result";
import LoadingScreen from "~/components//shared/loading-screen";
import { useProfile } from "~/hooks/use-profile";
import { useResult } from "~/hooks/use-result";
import { useSchedule } from "~/hooks/use-schedule";
import { useToken } from "~/hooks/use-token";
import type { Sessions } from "~/types/schedule";
import { predefinedColors } from "~/utils/colors";

const ImaluumProvider = ({ children }: { children: React.ReactNode }) => {
	const { profile, setProfile } = useProfile();
	const { schedule, setSchedule } = useSchedule();
	const { result, setResult } = useResult();
	const { token } = useToken();

	const fetchImaluum = useQueries({
		queries: [
			{
				queryKey: ["profile"],
				queryFn: async () => {
					const res = await fetch("https://api.quddus.my/api/profile", {
						credentials: "include",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
					});

					const json = await res.json();

					if (!res) {
						console.error("Error: ", json.message);
						return Promise.reject(json.message);
					}

					setProfile(json.data);
					return json.data;
				},
				// enabled: !!token && !profile,
			},
			{
				queryKey: ["result"],
				queryFn: async () => {
					const res = await fetch("https://api.quddus.my/api/result", {
						credentials: "include",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
					});

					const json = await res.json();

					if (!res) {
						console.error("Error: ", json.message);
						return Promise.reject(json.message);
					}

					setResult(json.data);
					return json.data;
				},
				// enabled: !!token && !result.length,
			},
			{
				queryKey: ["schedule"],
				queryFn: async () => {
					const res = await fetch("https://api.quddus.my/api/schedule", {
						credentials: "include",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
					});

					const json = await res.json();

					if (!res) {
						console.error("Error: ", json.message);
						return Promise.reject(json.message);
					}

					const tweakedSchedule = json.data.map((item: Sessions) => {
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
					return tweakedSchedule;
				},
				// enabled: !!token && !schedule.length,
			},
		],
	});

	if (fetchImaluum.some((query) => query.isLoading)) {
		return <LoadingScreen />;
	}

	// return children;
	if (fetchImaluum.every((query) => query.isFetched)) {
		return children;
	}

	// if (fetchImaluum.some((query) => query.isError)) {
	// 	return <NotFound />;
	// }

	// if (profile && result?.length !== 0 && schedule) {
	// 	return children;
	// }

	// if (profile && schedule?.length !== 0) {
	//   return children;
	// }
	//
	// return <NotFound />;
};

export default ImaluumProvider;
