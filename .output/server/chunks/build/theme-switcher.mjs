import { jsx } from 'react/jsx-runtime';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import ___default from 'react';
import { b as c } from '../runtime.mjs';

const u=___default.forwardRef(({className:o},r)=>{const{theme:t,setTheme:m}=useTheme();return jsx("button",{name:"theme-switcher",type:"button",className:c("size-8 hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200",o),ref:r,onClick:()=>m(t==="dark"?"light":"dark"),children:t==="light"?jsx(MoonIcon,{}):jsx(SunIcon,{})})});

export { u };
//# sourceMappingURL=theme-switcher.mjs.map
