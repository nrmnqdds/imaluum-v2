import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Sessions } from "~/types/schedule";

type ScheduleType = {
	schedule: Sessions[];
	setSchedule: (schedule: Sessions[]) => void;
	reset: () => void;
};

const useSchedule = create(
	persist<ScheduleType>(
		(set) => ({
			schedule: [],
			setSchedule: (schedule: Sessions[]) => set({ schedule }),
			reset: () => set({ schedule: [] }),
		}),
		{
			name: "schedule-storage",
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export default useSchedule;
