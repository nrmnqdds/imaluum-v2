import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Result } from "~/types/result";

type ResultType = {
	result: Result[];
	setResult: (result: Result[]) => void;
	reset: () => void;
};

const useResult = create(
	persist<ResultType>(
		(set) => ({
			result: [],
			setResult: (result: Result[]) => set({ result }),
			reset: () => set({ result: [] }),
		}),
		{
			name: "result-storage",
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export default useResult;
