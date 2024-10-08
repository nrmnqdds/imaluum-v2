import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { StudentInfo } from "~/types/student";

type ProfileType = {
	profile: StudentInfo | null;
	setProfile: (profile: StudentInfo) => void;
	reset: () => void;
};

const useProfile = create(
	persist<ProfileType>(
		(set) => ({
			profile: null,
			setProfile: (profile: StudentInfo) => set({ profile }),
			reset: () => set({ profile: null }),
		}),
		{
			name: "profile-storage",
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export default useProfile;
