import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const l = create(persist((e) => ({ result: [], setResult: (t) => e({ result: t }), reset: () => e({ result: [] }) }), { name: "result-storage", storage: createJSONStorage(() => sessionStorage) }));

export { l };
//# sourceMappingURL=use-result-Br6-fj0X.mjs.map
