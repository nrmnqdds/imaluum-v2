import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet, useRouterState, useRouter, redirect } from '@tanstack/react-router';
import { v as vt, a as ae, c as ce, S as St, y as yr, r as re } from '../runtime.mjs';
import { Transition, Dialog, TransitionChild, DialogPanel, DialogTitle, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { w, T, x } from './logo-landing-page-L_pqh8ji.mjs';
import { useQueries, useQueryClient } from '@tanstack/react-query';
import c from 'react-hot-toast';
import { Image } from '@unpic/react';
import { XMarkIcon, Bars3Icon, ExclamationCircleIcon, HomeIcon, CalendarIcon, FlagIcon } from '@heroicons/react/24/outline';
import { useState, Fragment, useEffect } from 'react';
import { l } from './use-result-Br6-fj0X.mjs';
import { e } from './colors-a1B8AvOz.mjs';
import { fetch as fetch$1 } from 'undici';
import { u } from './use-schedule-BraYLo3r.mjs';
import { parse } from 'node-html-parser';
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
import 'clsx';
import 'tailwind-merge';
import 'zustand';
import 'zustand/middleware';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@tanstack/react-router-with-query';
import 'next-themes';
import 'react-dom';
import '@heroicons/react/20/solid';

function me() {
  const { profile: t } = x(), r = useQueryClient(), s = useRouter(), n = ae("POST", ce(he, "c_1yf6izx", "$$function0"));
  return jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [jsx("div", { children: jsx(MenuButton, { className: "", children: (t == null ? void 0 : t.image_url) ? jsx(Image, { alt: "profile pic", src: t.image_url, width: 40, height: 40, className: "inline-block rounded-full" }) : jsx("span", { className: "inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100", children: jsx("svg", { role: "math", fill: "currentColor", viewBox: "0 0 24 24", className: "h-full w-full text-gray-300", children: jsx("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" }) }) }) }) }), jsx(MenuItems, { transition: true, className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in", children: jsx("div", { className: "py-1", children: jsx(MenuItem, { children: jsx("button", { type: "submit", className: "block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900", onClick: async () => {
    await n(), r.clear(), c.success("Logged out successfully"), s.navigate({ to: "/" });
  }, children: "Sign out" }) }) }) })] });
}
async function he() {
  yr("MOD_AUTH_CAS");
}
const fe = () => {
  const t = /* @__PURE__ */ new Date(), r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], n = r[t.getDay()], l = s[t.getMonth()], c = t.getDate(), o = pe(c), m = t.getFullYear();
  return `${n}. ${l} ${c}${o}, ${m}`;
}, pe = (t) => {
  if (t >= 11 && t <= 13)
    return "th";
  switch (t % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}, ge = () => {
  const [t, r] = useState("00:00:00 AM");
  return useEffect(() => {
    const s = setInterval(() => {
      const n = /* @__PURE__ */ new Date(), l = n.getHours() % 12 || 12, c = n.getMinutes().toString().padStart(2, "0"), o = n.getSeconds().toString().padStart(2, "0"), m = n.getHours() >= 12 ? "PM" : "AM";
      r(`${l}:${c}:${o} ${m}`);
    }, 1e3);
    return () => clearInterval(s);
  }, []), jsxs("div", { className: "relative flex items-center gap-5 flex-1 text-xs md:text-sm", children: [jsx("h1", { className: "text-foreground font-bold", children: fe() }), jsx("h2", { className: "text-foreground font-bold", children: t })] });
}, I = [{ name: "Dashboard", href: "/dashboard", icon: HomeIcon }, { name: "Class Timetable", href: "/schedule", icon: CalendarIcon }, { name: "Exam Results", href: "/result", icon: FlagIcon }];
function xe({ children: t }) {
  const r = useRouterState(), s = useRouter(), n = r.location.pathname, [l, c] = useState(false);
  return jsxs("div", { children: [jsx("div", { className: "w-full flex items-center justify-center bg-primary py-1 px-2", children: jsx("h1", { className: "drop-shadow text-accent text-[10px] sm:text-sm", children: "Incorrect data? Refresh! Sometimes the scraper misses. Sorry for the inconvenience. UIA pls support." }) }), jsx(Transition, { show: l, as: Fragment, children: jsxs(Dialog, { as: "div", className: "relative z-50 lg:hidden", onClose: c, children: [jsx(TransitionChild, { as: Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: jsx("div", { className: "fixed inset-0 bg-gray-900/80" }) }), jsx("div", { className: "fixed inset-0 flex", children: jsx(TransitionChild, { as: Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full", children: jsxs(DialogPanel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [jsx(TransitionChild, { as: Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: jsx("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: jsxs("button", { type: "button", className: "-m-2.5 p-2.5", onClick: () => c(false), children: [jsx("span", { className: "sr-only", children: "Close sidebar" }), jsx(XMarkIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" })] }) }) }), jsxs("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4", children: [jsx("div", { className: "flex h-32 shrink-0 items-center justify-center", children: jsx(Image, { width: 64, height: 64, className: "object-contain", src: w, alt: "Your Company" }) }), jsx("nav", { className: "flex flex-1 flex-col", children: jsx("ul", { className: "flex flex-1 flex-col gap-y-7", children: jsx("li", { children: jsx("ul", { className: "-mx-2 space-y-1", children: I.map((o) => jsx("li", { children: jsxs("a", { href: o.href, className: vt(n === o.href ? "bg-gray-50 text-primary" : "text-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-zinc-800", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [jsx(o.icon, { className: vt(n === o.href ? "text-primary" : "text-accent group-hover:text-primary", "h-6 w-6 shrink-0"), "aria-hidden": "true" }), o.name] }) }, o.name)) }) }) }) })] })] }) }) })] }) }), jsx("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: jsxs("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 pb-4", children: [jsx("div", { className: "flex h-32 shrink-0 items-center justify-center", children: jsx(Image, { width: 64, height: 64, className: "object-contain", src: w, alt: "Your Company" }) }), jsx("nav", { className: "flex flex-1 flex-col", children: jsxs("ul", { className: "flex flex-1 flex-col gap-y-7", children: [jsx("li", { children: jsx("ul", { className: "-mx-2 space-y-1", children: I.map((o) => jsx("li", { children: jsxs("button", { type: "button", onClick: () => s.navigate({ to: o.href }), className: vt(n === o.href ? "bg-secondary text-primary" : "text-foreground hover:text-primary hover:bg-accent", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"), children: [jsx(o.icon, { className: vt(n === o.href ? "text-primary" : "text-accent group-hover:text-primary", "h-6 w-6 shrink-0"), "aria-hidden": "true" }), o.name, o.name === "Class Timetable" && jsx("span", { className: "ml-auto text-xs font-semibold bg-red-500 text-red-200 animate-pulse rounded-full px-3 py-1", children: "HOT" })] }) }, o.name)) }) }), jsx("li", { className: "mt-auto", children: jsx("div", { className: "w-full flex items-center justify-center", children: jsx(T, {}) }) })] }) })] }) }), jsxs("div", { className: "lg:pl-72", children: [jsxs("div", { className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-card px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8", children: [jsxs("button", { type: "button", className: "-m-2.5 p-2.5 text-foreground lg:hidden", onClick: () => c(true), children: [jsx("span", { className: "sr-only", children: "Open sidebar" }), jsx(Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })] }), jsx("div", { className: "h-6 w-px bg-gray-200 lg:hidden", "aria-hidden": "true" }), jsxs("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [jsx(ge, {}), jsxs("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [jsx("div", { className: "hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-600", "aria-hidden": "true" }), jsx(me, {})] })] })] }), jsx("main", { className: "lg:overflow-x-hidden bg-card scrollbar-hide", children: t })] })] });
}
function ye() {
  var _a;
  const r = useRouterState().location.pathname, s = l(), [n, l$1] = useState(r === "/dashboard" && !!s.result && s.result.length > 0 && ((_a = s.result[0]) == null ? void 0 : _a.remarks) === "Please contact finance division regarding tuition fees");
  return jsx(Transition, { show: n, children: jsxs(Dialog, { className: "relative z-10", onClose: l$1, children: [jsx(TransitionChild, { enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }) }), jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: jsx(TransitionChild, { enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: jsxs(DialogPanel, { className: "relative transform overflow-hidden rounded-lg bg-card px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6", children: [jsxs("div", { children: [jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: jsx(ExclamationCircleIcon, { className: "h-6 w-6 text-red-600", "aria-hidden": "true" }) }), jsxs("div", { className: "mt-3 text-center sm:mt-5", children: [jsx(DialogTitle, { as: "h3", className: "text-primary font-semibold leading-6 text-gray-900", children: "You have unpaid tuition fees!" }), jsx("div", { className: "mt-2", children: jsx("p", { className: "text-sm text-gray-500", children: "Please contact the finance division to clear your tuition fees." }) })] })] }), jsx("div", { className: "mt-5 sm:mt-6", children: jsx("button", { type: "button", className: "inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", onClick: () => l$1(false), children: "Close" }) })] }) }) }) })] }) });
}
const ve = () => jsx("div", { className: "w-full h-screen bg-card flex items-center justify-center", children: jsxs("div", { className: "flex flex-col items-center gap-y-4", children: [jsx(Image, { src: w, alt: "logo", width: 200, height: 200, className: "object-contain animate-spin" }), jsx("div", { className: "text-2xl font-semibold text-primary", children: "Loading your data..." })] }) }), be = async (t, r, s) => {
  var _a;
  const n = `https://imaluum.iium.edu.my/MyAcademic/result${t}`;
  try {
    const l = await fetch(n, { headers: { Cookie: `MOD_AUTH_CAS=${s}` } });
    if (!l.ok)
      throw new Error("Failed to fetch schedule");
    const c = await l.text(), d = (_a = parse(c).querySelector(".box-body table.table.table-hover")) == null ? void 0 : _a.querySelectorAll("tr");
    if (!d)
      throw new Error("Failed to fetch schedule");
    const h = [], f = d[d.length - 1].querySelectorAll("td");
    if (f[0].textContent.trim() === "Please contact finance division regarding tuition fees") {
      for (const k of d) {
        const u = k.querySelectorAll("td");
        if (u.length >= 4) {
          const y = u[0].textContent.trim();
          if (y.split(/\s{2,}/)[0] === "Total Credit Points")
            break;
          const T = u[1].textContent.trim(), A = u[2].textContent.trim() || "N/A", $ = u[3].textContent.trim();
          h.push({ course_code: y, course_name: T, course_grade: A, course_credit: $ });
        }
      }
      return { session_query: t, session_name: r, result: h, gpa_value: "N/A", cgpa_value: "N/A", status: "N/A", remarks: "Please contact finance division regarding tuition fees" };
    }
    const i = f[1].textContent.trim().split(/\s{2,}/) || [], S = i[2], g = i[3], x = i[4], B = (f[3].textContent.trim().split(/\s{2,}/) || [])[2];
    d.pop();
    for (const k of d) {
      const u = k.querySelectorAll("td");
      if (u.length >= 4) {
        const y = u[0].textContent.trim(), T = u[1].textContent.trim(), A = u[2].textContent.trim() || "N/A", $ = u[3].textContent.trim();
        h.push({ course_code: y, course_name: T, course_grade: A, course_credit: $ });
      }
    }
    return { session_query: t, session_name: r, result: h, gpa_value: S, cgpa_value: B, status: g, remarks: x };
  } catch (l) {
    throw console.log("err", l), new Error("Failed to fetch schedule");
  }
}, we = "https://imaluum.iium.edu.my/MyAcademic/result";
async function Ne(t) {
  var _a, _b;
  try {
    const r = await fetch(we, { headers: { Cookie: `MOD_AUTH_CAS=${t}` } });
    if (!r.ok)
      return { error: "Failed to fetch data" };
    const s = await r.text(), n = parse(s);
    if (!n)
      throw new Error("Failed to parse the page body");
    const l = n.querySelectorAll(".box.box-primary .box-header.with-border .dropdown ul.dropdown-menu li[style*='font-size:16px']");
    if (!l)
      throw new Error("Failed to fetch session body");
    const c = [];
    for (const m of l) {
      const d = m, h = (_a = d.querySelector("a")) == null ? void 0 : _a.textContent.trim(), f = (_b = d.querySelector("a")) == null ? void 0 : _b.getAttribute("href");
      c.push({ sessionName: h, sessionQuery: f });
    }
    return c.reverse(), c.length === 0 ? { success: true, data: null } : { success: true, data: await Promise.all(c.map(({ sessionQuery: m, sessionName: d }) => be(m, d, t))) };
  } catch (r) {
    return console.error("Error fetching data:", r), { error: "Failed to fetch data" };
  }
}
const j = () => {
  const t = re("MOD_AUTH_CAS");
  return t || null;
}, Ce = ({ children: t }) => {
  const { profile: r, setProfile: s } = x(), { result: n, setResult: l$1 } = l(), { schedule: c, setSchedule: o } = u(), m = ae("GET", ce(Se, "c_6ppt8x", "$$function0")), d = ae("GET", ce(ke, "c_6ppt8x", "$$function1")), h = ae("GET", ce(Te, "c_6ppt8x", "$$function2")), f = useQueries({ queries: [{ queryKey: ["profile"], queryFn: async () => {
    const i = await m();
    if (!i)
      throw new Error("Profile not found");
    return s(i), i;
  }, enabled: !r, retry: 3 }, { queryKey: ["result"], queryFn: async () => {
    const i = await d();
    if (!i)
      throw new Error("Result not found");
    return l$1(i), i;
  }, retry: 3, enabled: !(n == null ? void 0 : n.length) }, { queryKey: ["schedule"], queryFn: async () => {
    const i = await h();
    if (!i)
      throw new Error("Schedule not found");
    const S = i.map((g) => ({ ...g, schedule: g.schedule.map((x) => ({ ...x, color: x.color || e[Math.floor(Math.random() * e.length)] })) }));
    return o(S), i;
  }, retry: 3, enabled: !(c == null ? void 0 : c.length) }] });
  return f.some((i) => i.isLoading) ? jsx(ve, {}) : f.some((i) => i.isError) ? jsx(St, {}) : r && (n == null ? void 0 : n.length) !== 0 && (c == null ? void 0 : c.length) !== 0 ? t : jsx(St, {});
};
async function Se() {
  const t = j();
  if (!t)
    throw redirect({ to: "/" });
  const r = await fetch$1("https://api.nrmnqdds.com/api/profile", { credentials: "include", headers: { "Content-Type": "application/json", Cookie: `MOD_AUTH_CAS=${t}` } });
  return r.ok ? (await r.json()).data : (console.log("profile error: ", r), null);
}
async function ke() {
  const t = j();
  if (!t)
    throw redirect({ to: "/" });
  const r = await Ne(t);
  return r.error || !r.data ? (console.log("result error: ", r), null) : r.data;
}
async function Te() {
  const t = j();
  if (!t)
    throw redirect({ to: "/" });
  const r = await fetch$1("https://api.nrmnqdds.com/api/schedule", { credentials: "include", headers: { "Content-Type": "application/json", Cookie: `MOD_AUTH_CAS=${t}` } });
  return r.ok ? (await r.json()).data : (console.log("schedule error: ", r), null);
}
const st = () => jsxs(Ce, { children: [jsx(xe, { children: jsx(Outlet, {}) }), jsx(ye, {})] });

export { st as component };
//# sourceMappingURL=_home-C7KJLCeB.mjs.map
