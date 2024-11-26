import { useQueries } from "@tanstack/react-query";
import { predefinedColors } from "~/utils/colors";
import LoadingScreen from "~/components//shared/loading-screen";
import { NotFound } from "~/components/shared/not-found";
import useProfile from "~/hooks/use-profile";
import useResult from "~/hooks/use-result";
import useSchedule from "~/hooks/use-schedule";
import { fetchSchedule } from "~/actions/schedule";
import { fetchProfile } from "~/actions/profile";
import { fetchResult } from "~/actions/result";

const ImaluumProvider = ({ children }: { children: React.ReactNode }) => {
	const { profile, setProfile } = useProfile();
	const { schedule, setSchedule } = useSchedule();
	const { result, setResult } = useResult();

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
				enabled: !profile?.name,
			},
			{
				queryKey: ["result"],
				queryFn: async () => {
					const res = await fetchResult();
					if (!res) {
						throw new Error("Profile not found");
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
				enabled: !schedule?.length,
			},
		],
	});

	if (fetchImaluum.some((query) => query.isLoading)) {
		return <LoadingScreen />;
	}

	// return children;
  if(fetchImaluum.every((query) => query.isFetched)) {
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
