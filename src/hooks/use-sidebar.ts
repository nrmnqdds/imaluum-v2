import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUseSidebar {
	isOpen: boolean;
	toggleIsOpen: () => void;
}

export const useSidebar = create(
	persist<IUseSidebar>(
		(set) => ({
			isOpen: false,
			toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
		}),
		{
			name: "sidebar-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
