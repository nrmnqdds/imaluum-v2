import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUseToken {
	token: string;
	setToken: (token: string) => void;
	reset: () => void;
}

export const useToken = create(
	persist<IUseToken>(
		(set) => ({
			token: "",
			setToken: (token) => set({ token }),
			reset: () =>
				set({
					token: "",
				}),
		}),
		{
			name: "token-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
