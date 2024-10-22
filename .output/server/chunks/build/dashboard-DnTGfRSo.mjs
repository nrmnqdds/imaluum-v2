import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { a as ae, c as ce } from '../runtime.mjs';
import { useQuery } from '@tanstack/react-query';
import { fetch } from 'undici';
import { Image } from '@unpic/react';
import { TvIcon, LinkIcon } from '@heroicons/react/24/outline';
import { l } from './use-result-Br6-fj0X.mjs';
import { ResponsiveContainer, AreaChart, Tooltip, YAxis, Area } from 'recharts';
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
import '@tanstack/react-router';
import 'react';
import 'react-hot-toast';
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

const w = ({ className: l }) => {
  const t = ae("GET", ce(_, "c_17t72ba", "$$function0")), { data: n, isFetching: a } = useQuery({ queryKey: ["ads"], queryFn: async () => {
    const i = await t();
    if (i)
      return i;
  }, retry: 3 });
  return jsxs("section", { className: l, children: [jsxs("div", { className: "my-5 flex justify-between w-full items-center", children: [jsxs("h2", { className: "lg:text-lg font-bold text-zinc-900 dark:text-slate-100 flex items-center gap-5", children: [jsx(TvIcon, {}), "SOUQ Advertisement"] }), jsxs("a", { href: "https://souq.iium.edu.my/list", target: "_blank", rel: "noreferrer noopener", className: "text-blue-500 hover:text-blue-700 flex items-center gap-1 mr-5", children: ["See More", jsx("span", { children: jsx(LinkIcon, {}) })] })] }), jsx("div", { className: "flex flex-row gap-2 w-full h-full", children: a ? jsx("div", { className: "flex flex-row gap-2 overflow-hidden", children: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => jsx("div", { className: "w-40 h-40 rounded-xl bg-gray-200 dark:bg-zinc-600 animate-pulse" }, i)) }) : jsx(k, { ads: n }) })] });
};
function k({ ads: l }) {
  return jsxs("div", { className: "w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]", children: [jsxs("ul", { className: "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll", children: [l.map((t, n) => jsx("a", { href: t.link, target: "_blank", rel: "noreferrer noopener", className: "flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300", children: jsx(Image, { src: t.image_url, alt: "", layout: "fullWidth", objectFit: "cover", className: "rounded-lg w-full h-full" }) }, n)), l.map((t, n) => jsx("a", { href: t.link, target: "_blank", rel: "noreferrer noopener", className: "flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300", children: jsx(Image, { src: t.image_url, alt: t.title, layout: "fullWidth", objectFit: "cover", className: "rounded-lg w-full h-full" }) }, n))] }), jsxs("ul", { className: "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll", "aria-hidden": "true", children: [l.map((t, n) => jsx("a", { href: t.link, target: "_blank", rel: "noreferrer noopener", className: "flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300", children: jsx(Image, { src: t.image_url, objectFit: "cover", layout: "fullWidth", alt: t.title, className: "rounded-lg w-full h-full" }) }, n)), l.map((t, n) => jsx("a", { href: t.link, target: "_blank", rel: "noreferrer noopener", className: "flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300", children: jsx(Image, { src: t.image_url, alt: t.title, objectFit: "cover", layout: "fullWidth", className: "rounded-lg w-full h-full" }) }, n))] })] });
}
async function _() {
  const l = await fetch("https://api.nrmnqdds.com/api/ads", { credentials: "include", headers: { "Content-Type": "application/json" } });
  return l.ok ? (await l.json()).data : (console.log("ads error: ", l), null);
}
const j = () => {
  var _a;
  const { result: l$1 } = l(), n = (_a = l$1 == null ? void 0 : l$1.filter((a) => a.cgpa_value && a.gpa_value)) == null ? void 0 : _a.map((a) => ({ name: a.session_name, CGPA: a.cgpa_value, GPA: a.gpa_value }));
  return l$1 === null ? jsx("div", { className: "w-full h-full flex items-center justify-center", children: jsx("h1", { className: "text-white font-bold text-center text-xs sm:text-lg", children: "You have not taken any exams yet!" }) }) : jsx("div", { className: "flex items-center justify-center h-full w-full ", children: jsx(ResponsiveContainer, { width: "100%", height: "100%", children: jsxs(AreaChart, { width: 500, height: 400, data: n, margin: { top: 10, right: 30, left: 0, bottom: 0 }, children: [jsx(Tooltip, { content: ({ active: a, payload: i }) => a && i && i.length ? jsx("div", { className: "rounded-lg border bg-background p-2 shadow-sm bg-zinc-100 dark:bg-zinc-900", children: jsxs("div", { className: "grid grid-cols-2 gap-2", children: [jsxs("div", { className: "flex flex-col", children: [jsx("span", { className: "text-[0.70rem] uppercase text-muted-foreground", children: "CGPA" }), jsx("span", { className: "font-bold text-muted-foreground", children: i[0].value })] }), jsxs("div", { className: "flex flex-col", children: [jsx("span", { className: "text-[0.70rem] uppercase text-muted-foreground", children: "GPA" }), jsx("span", { className: "font-bold", children: i[1].value })] })] }) }) : null }), jsx(YAxis, {}), jsx(Area, { type: "monotone", dataKey: "CGPA", stroke: "#a4f6ce", fill: "#00928F" }), jsx(Area, { type: "monotone", dataKey: "GPA", stroke: "#a4f6ce", fill: "#00928F" })] }) }) });
}, A = () => {
  const { result: l$1 } = l();
  return l$1 === null ? jsx("div", { className: "w-full h-full flex items-center justify-center", children: jsx("h1", { className: "text-white font-bold text-center text-xs sm:text-lg", children: "You have not taken any exams yet!" }) }) : jsx(Fragment, { children: l$1 == null ? void 0 : l$1.map((t, n) => jsxs("div", { className: "flex flex-col text-xs md:text-sm", children: [jsxs("p", { children: [jsxs("span", { className: "font-bold text-zinc-900 dark:text-slate-100", children: ["Session:", " "] }), t.session_name] }), jsxs("p", { children: [jsxs("span", { className: "font-bold text-zinc-900 dark:text-slate-100", children: ["GPA:", " "] }), t.gpa_value] }), jsxs("p", { children: [jsxs("span", { className: "font-bold text-zinc-900 dark:text-slate-100", children: ["CGPA:", " "] }), t.cgpa_value] })] }, n)) });
}, o = ({ className: l = "", children: t, ...n }) => jsx("div", { className: `row-span-1 rounded-xl border border-border bg-background p-4 ${l}`, ...n, children: t }), C = () => jsxs("div", { className: "grid auto-rows-[20vh] grid-cols-3 gap-2", children: [jsx(o, { children: "Coming Soon" }), jsx(o, { children: "Coming Soon" }), jsx(o, { children: "Coming Soon" }), jsx(o, { className: "col-span-2", children: jsx(j, {}) }), jsx(o, { className: "overflow-y-scroll scrollbar-hide", children: jsx(A, {}) }), jsx(o, { children: "Coming Soon" }), jsx(o, { className: "col-span-2", children: "Coming Soon" })] }), G = () => jsxs("section", { className: "min-h-screen flex flex-col py-10 px-4 sm:px-6 lg:px-8", children: [jsx(C, {}), jsx(w, { className: "w-full h-fit flex flex-col" })] }), te = () => jsx(G, {});

export { te as component };
//# sourceMappingURL=dashboard-DnTGfRSo.mjs.map
