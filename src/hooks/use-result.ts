import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Result } from "~/types/result";

interface IUseResult {
	result: Result[];
	setResult: (result: Result[]) => void;
	reset: () => void;
}

export const useResult = create(
	persist<IUseResult>(
		(set) => ({
			result: [],
			setResult: (result: Result[]) => set({ result }),
			reset: () => set({ result: [] }),
		}),
		{
			name: "result-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
