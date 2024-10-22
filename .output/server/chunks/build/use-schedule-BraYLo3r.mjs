import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const u = create(persist((e) => ({ schedule: [], setSchedule: (s) => e({ schedule: s }), reset: () => e({ schedule: [] }) }), { name: "schedule-storage", storage: createJSONStorage(() => sessionStorage) }));

export { u };
//# sourceMappingURL=use-schedule-BraYLo3r.mjs.map
