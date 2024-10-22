import { jsx, jsxs } from 'react/jsx-runtime';
import { v as vt, a as ae, c as ce, J, h as hr } from '../runtime.mjs';
import { useRouter } from '@tanstack/react-router';
import ___default, { useState } from 'react';
import c from 'react-hot-toast';
import { T, w, x } from './logo-landing-page-L_pqh8ji.mjs';
import { l } from './use-result-Br6-fj0X.mjs';
import { u } from './use-schedule-BraYLo3r.mjs';
import { request } from 'undici';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Image } from '@unpic/react';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'tiny-invariant';
import '@tanstack/react-query';
import '@heroicons/react/24/outline';
import 'clsx';
import 'tailwind-merge';
import 'zustand';
import 'zustand/middleware';
import 'node-html-parser';
import '@headlessui/react';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@tanstack/react-router-with-query';
import 'next-themes';
import 'react-dom';

const d = ___default.forwardRef(({ className: r, placeholder: i, ...a }, n) => jsx("input", { placeholder: i, className: vt("block w-full rounded-md border-0 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-ring placeholder:text-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"), ref: n, ...a })), A = () => {
  const [r, i] = useState(false), { reset: a, setProfile: n } = x(), { reset: p } = u(), { reset: h } = l(), u$1 = useRouter(), g = ae("POST", ce(O, "c_80ebt0", "$$function0"));
  return jsxs("form", { onSubmit: async (l) => {
    l.preventDefault();
    const m = new FormData(l.currentTarget), f = m.get("username"), x = m.get("password");
    try {
      i(true);
      const s = await g({ username: f, password: x });
      a(), p(), h(), s.status === 200 || s.status === 201 ? (n({ matric_no: s.data.username, name: "", image_url: "" }), u$1.navigate({ to: "/dashboard" })) : (console.log(s), c.error(s.message));
    } catch (s) {
      console.log(s), c.error("An error occurred. Please try again later.");
    } finally {
      i(false);
    }
  }, className: "space-y-2 mt-10 w-fit", children: [jsxs("div", { className: "flex items-center justify-center gap-3", children: [jsx(d, { name: "username", placeholder: "Matric Number", disabled: r }), jsx(d, { name: "password", placeholder: "Password", type: "password", disabled: r })] }), jsx(J, { type: "submit", disabled: r, className: "float-right", children: jsx("span", { className: "text-foreground", children: r ? "Logging in" : "Log in" }) })] });
};
async function O(r) {
  const a = await (await request("https://api.nrmnqdds.com/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) })).body.json();
  return hr("MOD_AUTH_CAS", a.data.token, { maxAge: 1800 }), a;
}
const I = "/_build/assets/imaluum.nrmnqdds.com_schedule%20(1)-Bx62177-.png", C = "/_build/assets/imaluum.nrmnqdds.com_schedule-3TLT6dhQ.png", pe = function() {
  return jsxs("section", { className: "relative", children: [jsx(T, { className: "absolute top-2 right-5" }), jsxs("svg", { className: "absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]", "aria-hidden": "true", children: [jsx("defs", { children: jsx("pattern", { id: "983e3e4c-de6d-4c3f-8d64-b9761d1534cc", width: 200, height: 200, x: "50%", y: -1, patternUnits: "userSpaceOnUse", children: jsx("path", { d: "M.5 200V.5H200", fill: "none" }) }) }), jsx("svg", { role: "math", x: "50%", y: -1, className: "overflow-visible fill-zinc-800/20", children: jsx("path", { d: "M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z", strokeWidth: 0 }) }), jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" })] }), jsx("div", { className: "absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]", "aria-hidden": "true", children: jsx("div", { className: "aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20", style: { clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" } }) }), jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-32", children: [jsxs("div", { className: "mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl", children: [jsx(Image, { width: 48, height: 48, className: "object-contain", src: w, alt: "Your Company" }), jsxs("div", { className: "mt-24 sm:mt-32 lg:mt-16", children: [jsx("span", { className: "mr-2 rounded-full bg-yellow-500/10 px-3 py-2 text-sm font-semibold leading-6 text-yellow-600 dark:text-yellow-400 ring-1 ring-inset ring-indigo-500/20", children: "In construction" }), jsxs("a", { href: "https://github.com/qryskalyst20/simplified-imaluum", target: "_blank", rel: "noreferrer", className: "inline-flex space-x-6", children: [jsx("span", { className: "rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-600 dark:text-cyan-400 ring-1 ring-inset ring-indigo-500/20", children: "What's new" }), jsxs("span", { className: "inline-flex items-center space-x-2 text-sm font-medium leading-6 text-zinc-800 dark:text-slate-200", children: [jsx("span", { children: "Just shipped v2.0" }), jsx(ChevronRightIcon, { className: "h-5 w-5 text-zinc-500", "aria-hidden": "true" })] })] })] }), jsx("h1", { className: "mt-10 text-4xl font-bold tracking-tight text-zinc-800 dark:text-slate-200 sm:text-6xl", children: "Simplified iMa'luum" }), jsx("p", { className: "mt-3 text-lg leading-8 text-zinc-800 dark:text-slate-200 text-wrap", children: "A simplified version of i-Ma'luum for students. An attempt to make our student portal more user-friendly." }), jsx(A, {})] }), jsx("div", { className: "mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32", children: jsxs("div", { className: "max-w-3xl flex-none sm:max-w-5xl lg:max-w-none", children: [jsx(Image, { src: I, alt: "App screenshot", width: 1200, height: 0, priority: true, sizes: "100%", className: "rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 dark:hidden object-contain h-auto block" }), jsx(Image, { src: C, alt: "App screenshot", width: 1200, height: 0, priority: true, sizes: "100%", className: "rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 hidden object-contain h-auto dark:block" })] }) })] })] });
};

export { pe as component };
//# sourceMappingURL=index-BcfTFMKi.mjs.map
