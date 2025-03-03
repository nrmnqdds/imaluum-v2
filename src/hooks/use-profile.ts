import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Nullable } from "~/types/nullable";
import type { StudentInfo } from "~/types/student";

interface ProfileType {
	profile: Nullable<StudentInfo>;
	setProfile: (profile: StudentInfo) => void;
	reset: () => void;
}

export const useProfile = create(
	persist<ProfileType>(
		(set) => ({
			profile: null,
			setProfile: (profile: StudentInfo) => set({ profile }),
			reset: () =>
				set({
					profile: null,
				}),
		}),
		{
			name: "profile-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
