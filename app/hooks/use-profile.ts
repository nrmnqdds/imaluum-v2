import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { StudentInfo } from "~/types/student";

type ProfileType = {
	profile: StudentInfo;
	setProfile: (profile: StudentInfo) => void;
	reset: () => void;
};

const useProfile = create(
	persist<ProfileType>(
		(set) => ({
			profile: {
				image_url: "",
				name: "",
				matric_no: "",
			},
			setProfile: (profile: StudentInfo) => set({ profile }),
			reset: () =>
				set({
					profile: {
						image_url: "",
						name: "",
						matric_no: "",
					},
				}),
		}),
		{
			name: "profile-storage",
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export default useProfile;
