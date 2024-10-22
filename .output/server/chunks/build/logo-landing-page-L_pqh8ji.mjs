import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { jsx } from 'react/jsx-runtime';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import ___default from 'react';
import { v as vt } from '../runtime.mjs';

const x = create(persist((e) => ({ profile: null, setProfile: (t) => e({ profile: t }), reset: () => e({ profile: null }) }), { name: "profile-storage", storage: createJSONStorage(() => sessionStorage) })), T = ___default.forwardRef(({ className: e }, t) => {
  const { theme: r, setTheme: s } = useTheme();
  return jsx("button", { name: "theme-switcher", type: "button", className: vt("size-8 hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200", e), ref: t, onClick: () => s(r === "dark" ? "light" : "dark"), children: r === "light" ? jsx(MoonIcon, {}) : jsx(SunIcon, {}) });
}), w = "/_build/assets/logo-landing-page-5SISLPWR.png";

export { T, w, x };
//# sourceMappingURL=logo-landing-page-L_pqh8ji.mjs.map
