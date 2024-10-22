import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { u } from './use-schedule-BraYLo3r.mjs';
import { v as vt } from '../runtime.mjs';
import d from 'moment';
import { e } from './colors-a1B8AvOz.mjs';
import 'zustand';
import 'zustand/middleware';
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
import 'undici';
import '@unpic/react';
import '@heroicons/react/24/outline';
import '@tanstack/react-router';
import 'react-hot-toast';
import 'clsx';
import 'tailwind-merge';
import 'node-html-parser';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@tanstack/react-router-with-query';
import 'next-themes';
import 'react-dom';

const k = ({ setEvents: e, courses: s }) => {
  var _a;
  const [r, o] = useState((_a = s[0]) == null ? void 0 : _a.session_name);
  return jsx(Listbox, { value: r, onChange: (a) => {
    o(a);
    const m = s.find((n) => n.session_name === a);
    e((m == null ? void 0 : m.schedule) || []);
  }, children: jsxs("div", { className: "relative mt-2", children: [jsxs(ListboxButton, { className: "relative w-full cursor-default rounded-md bg-primary py-1.5 pl-3 pr-10 text-left text-foreground shadow-sm ring-1 ring-inset ring-ring sm:text-sm sm:leading-6", children: [jsx("span", { className: "block truncate", children: r }), jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: jsx(ChevronUpDownIcon, { "aria-hidden": "true", className: "h-5 w-5 text-foreground" }) })] }), jsx(ListboxOptions, { transition: true, className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm", children: s.map((a) => jsxs(ListboxOption, { value: a.session_name, className: "group relative cursor-default select-none py-2 pl-3 pr-9 text-foreground data-[focus]:bg-primary data-[focus]:text-white", children: [jsx("span", { className: "block truncate font-normal group-data-[selected]:font-semibold", children: a.session_name }), jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-primary group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden", children: jsx(CheckIcon, { "aria-hidden": "true", className: "h-5 w-5" }) })] }, a.id)) })] }) });
}, H = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function T({ startDay: e, endDay: s }) {
  return jsx("div", { className: vt("duration-300 top-16 left-0 md:left-64 right-0 xl:right-96 h-8 sm:pl-10 bg-background border-b border-border"), children: jsx("div", { className: "w-full h-full flex flex-row", children: H.slice(e, s + 1).map((r, o) => jsx("div", { className: `flex-1 h-full
              flex flex-col items-center justify-center`, children: jsx("p", { className: "text-slate-500 text-xs font-bold", children: r }) }, o)) }) });
}
function D({ hour: e, numberOfDays: s, showHour: r = true }) {
  return jsxs("div", { className: "relative w-full h-16", children: [jsx("div", { className: "absolute w-full h-full border-b border-border/30 sm:border-border" }), jsx("div", { className: "absolute left-0 w-12 h-full hidden sm:flex flex-col items-center justify-start border-r border-border bg-background", children: r && jsxs("p", { className: `text-foreground text-xs font-bold mt-1
          -translate-y-1/2 pb-2`, children: [e > 12 ? e - 12 : e, " ", e > 11 ? "PM" : "AM"] }) }), jsx("div", { className: "absolute left-0 sm:left-8 right-0 h-full flex flex-row sm:ml-5", children: [...Array(s)].map((o) => jsx("div", { className: `flex-1 h-full
              ${o !== s - 1 && "border-r border-border/30 sm:border-border"}` }, o)) })] });
}
function S({ event: e, config: s }) {
  const r = d(e.weekTime.start, "HH:mm:ss"), o = d(e.weekTime.end, "HH:mm:ss"), l = s.endDay - s.startDay + 1, a = 64 * (r.get("hours") + r.get("minutes") / 60 - s.startHour) + 32 + 2, m = 64 * (o.get("hours") + o.get("minutes") / 60 - (r.get("hours") + r.get("minutes") / 60)) - 5, n = `calc(${100 / l * (e.weekTime.day - s.startDay)}% + 2px)`, c = `calc(${100 / l}% - 5px)`;
  return jsxs("button", { type: "button", className: vt("absolute rounded-md duration-100 p-1 space-y-2 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", [e.color]), style: { top: a, height: m, left: n, width: c }, children: [jsx("p", { className: "text-[8px] top-1 left-1 absolute flex sm:hidden", children: d(e.weekTime.start, "HH:mm:ss").format("h:mma") }), jsx("p", { className: "text-[8px] bottom-1 right-1 absolute flex sm:hidden", children: d(e.weekTime.end, "HH:mm:ss").format("h:mma") }), jsx("p", { className: "text-[8px] hidden sm:block md:text-xs md:font-bold", children: e.title }), jsx("div", { className: "block sm:hidden", children: jsx("p", { className: "text-[8px] md:text-xs font-bold", children: e.title }) }), jsxs("p", { className: "text-[8px] hidden sm:block md:text-xs md:font-bold", children: [d(e.weekTime.start, "HH:mm:ss").format("h:mma"), " -", " ", d(e.weekTime.end, "HH:mm:ss").format("h:mma")] })] });
}
function M(e, s) {
  const r = [];
  for (let o = e; o < s; o++)
    r.push(o);
  return r;
}
function C({ events: e }) {
  function s() {
    let o = 0, l = 6, a = 8, m = 23;
    for (const n of e) {
      n.weekTime.day < o && (o = n.weekTime.day), n.weekTime.day > l && (l = n.weekTime.day);
      const c = d(n.weekTime.start, "HH:mm:ss").get("hours");
      c < a && (a = c);
      const u = d(n.weekTime.end, "HH:mm:ss").get("hours");
      u > m && (m = u);
    }
    return a = Math.max(a - 1, 0), m = Math.min(m + 2, 23), { startDay: o, endDay: l, startHour: a, endHour: m };
  }
  const r = s();
  return jsxs("div", { className: "relative h-full bg-card", children: [jsx(T, { startDay: r.startDay, endDay: r.endDay }), jsxs("div", { className: "", children: [M(r.startHour, r.endHour).map((o, l) => jsx(D, { hour: o, showHour: l !== 0, numberOfDays: r.endDay - r.startDay + 1 }, l)), jsx("div", { className: "absolute top-0 bottom-0 left-0 -right-px sm:pl-12", children: jsx("div", { className: "relative w-full h-full", children: e.map((o, l) => jsx(S, { event: o, config: r }, l)) }) })] })] });
}
function j(e$1) {
  const s = [];
  for (const r of e$1.timestamps)
    s.push({ title: e$1.course_code, color: e$1.color || e[Math.floor(Math.random() * e.length)], weekTime: r });
  return s;
}
function _(e) {
  let s = [];
  for (const r of e)
    s = [...s, ...j(r)];
  return s;
}
const E = () => {
  const { schedule: e } = u(), [s, r] = useState(e[0].schedule);
  return console.log(e), jsxs("section", { className: "min-h-screen flex flex-col", children: [jsx("div", { className: "w-fit p-2 flex gap-5", children: jsx(k, { courses: e, setEvents: r }) }), jsx(C, { events: !s || s.length === 0 ? [] : _(s) })] });
}, ae = () => jsx(E, {});

export { ae as component };
//# sourceMappingURL=schedule-DEYXUzH2.mjs.map
