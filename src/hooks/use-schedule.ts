import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Sessions } from "~/types/schedule";

interface IUseSchedule {
	schedule: Sessions[];
	setSchedule: (schedule: Sessions[]) => void;
	reset: () => void;
}

export const useSchedule = create(
	persist<IUseSchedule>(
		(set) => ({
			schedule: [],
			setSchedule: (schedule: Sessions[]) => set({ schedule }),
			reset: () => set({ schedule: [] }),
		}),
		{
			name: "schedule-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
