import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet, useRouterState, useRouter } from '@tanstack/react-router';
import { p as pe$1, s, b as c, D, x as x$1 } from '../runtime.mjs';
import { u } from './theme-switcher.mjs';
import { Transition, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon, Bars3Icon, ExclamationCircleIcon, HomeIcon, CalendarIcon, FlagIcon } from '@heroicons/react/24/outline';
import { Image } from '@unpic/react';
import { useState, Fragment, useEffect } from 'react';
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
import 'react-hot-toast';
import 'clsx';
import 'tailwind-merge';
import 'zustand';
import 'zustand/middleware';
import 'node-html-parser';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@tanstack/react-router-with-query';
import 'next-themes';
import 'react-dom';
import '@heroicons/react/20/solid';

const P=()=>{const r=new Date,o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=o[r.getDay()],i=s[r.getMonth()],l=r.getDate(),a=A(l),h=r.getFullYear();return `${n}. ${i} ${l}${a}, ${h}`},A=r=>{if(r>=11&&r<=13)return "th";switch(r%10){case 1:return "st";case 2:return "nd";case 3:return "rd";default:return "th"}},R=()=>{const[r,o]=useState("00:00:00 AM");return useEffect(()=>{const s=setInterval(()=>{const n=new Date,i=n.getHours()%12||12,l=n.getMinutes().toString().padStart(2,"0"),a=n.getSeconds().toString().padStart(2,"0"),h=n.getHours()>=12?"PM":"AM";o(`${i}:${l}:${a} ${h}`);},1e3);return ()=>clearInterval(s)},[]),jsxs("div",{className:"relative flex items-center gap-5 flex-1 text-xs md:text-sm",children:[jsx("h1",{className:"text-foreground font-bold",children:P()}),jsx("h2",{className:"text-foreground font-bold",children:r})]})},x=[{name:"Dashboard",href:"/dashboard",icon:HomeIcon},{name:"Class Timetable",href:"/schedule",icon:CalendarIcon},{name:"Exam Results",href:"/result",icon:FlagIcon}];function H({children:r}){const o=useRouterState(),s$1=useRouter(),n=o.location.pathname,[i,l]=useState(!1);return jsxs("div",{children:[jsx("div",{className:"w-full flex items-center justify-center bg-primary py-1 px-2",children:jsx("h1",{className:"drop-shadow text-accent text-[10px] sm:text-sm",children:"Incorrect data? Refresh! Sometimes the scraper misses. Sorry for the inconvenience. UIA pls support."})}),jsx(Transition,{show:i,as:Fragment,children:jsxs(Dialog,{as:"div",className:"relative z-50 lg:hidden",onClose:l,children:[jsx(TransitionChild,{as:Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:jsx("div",{className:"fixed inset-0 bg-gray-900/80"})}),jsx("div",{className:"fixed inset-0 flex",children:jsx(TransitionChild,{as:Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:jsxs(DialogPanel,{className:"relative mr-16 flex w-full max-w-xs flex-1",children:[jsx(TransitionChild,{as:Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:jsx("div",{className:"absolute left-full top-0 flex w-16 justify-center pt-5",children:jsxs("button",{type:"button",className:"-m-2.5 p-2.5",onClick:()=>l(!1),children:[jsx("span",{className:"sr-only",children:"Close sidebar"}),jsx(XMarkIcon,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4",children:[jsx("div",{className:"flex h-32 shrink-0 items-center justify-center",children:jsx(Image,{width:64,height:64,className:"object-contain",src:s,alt:"Your Company"})}),jsx("nav",{className:"flex flex-1 flex-col",children:jsx("ul",{className:"flex flex-1 flex-col gap-y-7",children:jsx("li",{children:jsx("ul",{className:"-mx-2 space-y-1",children:x.map(a=>jsx("li",{children:jsxs("a",{href:a.href,className:c(n===a.href?"bg-gray-50 text-primary":"text-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-zinc-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"),children:[jsx(a.icon,{className:c(n===a.href?"text-primary":"text-accent group-hover:text-primary","h-6 w-6 shrink-0"),"aria-hidden":"true"}),a.name]})},a.name))})})})})]})]})})})]})}),jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 pb-4",children:[jsx("div",{className:"flex h-32 shrink-0 items-center justify-center",children:jsx(Image,{width:64,height:64,className:"object-contain",src:s,alt:"Your Company"})}),jsx("nav",{className:"flex flex-1 flex-col",children:jsxs("ul",{className:"flex flex-1 flex-col gap-y-7",children:[jsx("li",{children:jsx("ul",{className:"-mx-2 space-y-1",children:x.map(a=>jsx("li",{children:jsxs("button",{type:"button",onClick:()=>s$1.navigate({to:a.href}),className:c(n===a.href?"bg-secondary text-primary":"text-foreground hover:text-primary hover:bg-accent","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"),children:[jsx(a.icon,{className:c(n===a.href?"text-primary":"text-accent group-hover:text-primary","h-6 w-6 shrink-0"),"aria-hidden":"true"}),a.name,a.name==="Class Timetable"&&jsx("span",{className:"ml-auto text-xs font-semibold bg-red-500 text-red-200 animate-pulse rounded-full px-3 py-1",children:"HOT"})]})},a.name))})}),jsx("li",{className:"mt-auto",children:jsx("div",{className:"w-full flex items-center justify-center",children:jsx(u,{})})})]})})]})}),jsxs("div",{className:"lg:pl-72",children:[jsxs("div",{className:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-card px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8",children:[jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-foreground lg:hidden",onClick:()=>l(!0),children:[jsx("span",{className:"sr-only",children:"Open sidebar"}),jsx(Bars3Icon,{className:"h-6 w-6","aria-hidden":"true"})]}),jsx("div",{className:"h-6 w-px bg-gray-200 lg:hidden","aria-hidden":"true"}),jsxs("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:[jsx(R,{}),jsxs("div",{className:"flex items-center gap-x-4 lg:gap-x-6",children:[jsx("div",{className:"hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-600","aria-hidden":"true"}),jsx(D,{})]})]})]}),jsx("main",{className:"lg:overflow-x-hidden bg-card scrollbar-hide",children:r})]})]})}function Y(){const o=useRouterState().location.pathname,s=x$1(),[n,i]=useState(o==="/dashboard"&&!!s.result&&s.result.length>0&&s.result[0]?.remarks==="Please contact finance division regarding tuition fees");return jsx(Transition,{show:n,children:jsxs(Dialog,{className:"relative z-10",onClose:i,children:[jsx(TransitionChild,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:jsx(TransitionChild,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:jsxs(DialogPanel,{className:"relative transform overflow-hidden rounded-lg bg-card px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",children:[jsxs("div",{children:[jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",children:jsx(ExclamationCircleIcon,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),jsxs("div",{className:"mt-3 text-center sm:mt-5",children:[jsx(DialogTitle,{as:"h3",className:"text-primary font-semibold leading-6 text-gray-900",children:"You have unpaid tuition fees!"}),jsx("div",{className:"mt-2",children:jsx("p",{className:"text-sm text-gray-500",children:"Please contact the finance division to clear your tuition fees."})})]})]}),jsx("div",{className:"mt-5 sm:mt-6",children:jsx("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:()=>i(!1),children:"Close"})})]})})})})]})})}const pe=()=>jsxs(pe$1,{children:[jsx(H,{children:jsx(Outlet,{})}),jsx(Y,{})]});

export { pe as component };
//# sourceMappingURL=_home.mjs.map
