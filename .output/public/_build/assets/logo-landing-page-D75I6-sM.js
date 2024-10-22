import{c as T,p as N,a as C}from"./middleware-DHmCgB25.js";import{a as c,R as F,h as I,j as E,g as _}from"./client-DGCS2jvP.js";const Ae=T(N(e=>({profile:null,setProfile:t=>e({profile:t}),reset:()=>e({profile:null})}),{name:"profile-storage",storage:C(()=>sessionStorage)}));let P={data:""},L=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||P,D=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,B=/\/\*[^]*?\*\/|  +/g,R=/\n+/g,g=(e,t)=>{let a="",o="",s="";for(let r in e){let i=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+i+";":o+=r[1]=="f"?g(i,r):r+"{"+g(i,r[1]=="k"?"":t)+"}":typeof i=="object"?o+=g(i,t?t.replace(/([^,])+/g,n=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):r):i!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=g.p?g.p(r,i):r+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+o},m={},z=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+z(e[a]);return t}return e},G=(e,t,a,o,s)=>{let r=z(e),i=m[r]||(m[r]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(r));if(!m[i]){let l=r!==e?e:(d=>{let p,b,y=[{}];for(;p=D.exec(d.replace(B,""));)p[4]?y.shift():p[3]?(b=p[3].replace(R," ").trim(),y.unshift(y[0][b]=y[0][b]||{})):y[0][p[1]]=p[2].replace(R," ").trim();return y[0]})(e);m[i]=g(s?{["@keyframes "+i]:l}:l,a?"":"."+i)}let n=a&&m.g?m.g:null;return a&&(m.g=m[i]),((l,d,p,b)=>{b?d.data=d.data.replace(b,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(m[i],t,o,n),i},J=(e,t,a)=>e.reduce((o,s,r)=>{let i=t[r];if(i&&i.call){let n=i(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=l?"."+l:n&&typeof n=="object"?n.props?"":g(n,""):n===!1?"":n}return o+s+(i??"")},"");function w(e){let t=this||{},a=e.call?e(t.p):e;return G(a.unshift?a.raw?J(a,[].slice.call(arguments,1),t.p):a.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):a,L(t.target),t.g,t.o,t.k)}let O,k,M;w.bind({g:1});let f=w.bind({k:1});function W(e,t,a,o){g.p=t,O=e,k=a,M=o}function h(e,t){let a=this||{};return function(){let o=arguments;function s(r,i){let n=Object.assign({},r),l=n.className||s.className;a.p=Object.assign({theme:k&&k()},n),a.o=/ *go\d+/.test(l),n.className=w.apply(a,o)+(l?" "+l:"");let d=e;return e[0]&&(d=n.as||e,delete n.as),M&&d[0]&&M(n),O(d,n)}return s}}var q=e=>typeof e=="function",A=(e,t)=>q(e)?e(t):e,H=(()=>{let e=0;return()=>(++e).toString()})(),Q=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),U=20,v=new Map,V=1e3,Z=e=>{if(v.has(e))return;let t=setTimeout(()=>{v.delete(e),$({type:4,toastId:e})},V);v.set(e,t)},X=e=>{let t=v.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,U)};case 1:return t.toast.id&&X(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?S(e,{type:1,toast:a}):S(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?Z(o):e.toasts.forEach(r=>{Z(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},K=[],j={toasts:[],pausedAt:void 0},$=e=>{j=S(j,e),K.forEach(t=>{t(j)})},Y=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||H()}),x=e=>(t,a)=>{let o=Y(t,e,a);return $({type:2,toast:o}),o.id},u=(e,t)=>x("blank")(e,t);u.error=x("error");u.success=x("success");u.loading=x("loading");u.custom=x("custom");u.dismiss=e=>{$({type:3,toastId:e})};u.remove=e=>$({type:4,toastId:e});u.promise=(e,t,a)=>{let o=u.loading(t.loading,{...a,...a?.loading});return e.then(s=>(u.success(A(t.success,s),{id:o,...a,...a?.success}),s)).catch(s=>{u.error(A(t.error,s),{id:o,...a,...a?.error})}),e};var ee=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,te=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ae=f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,re=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ee} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${te} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ae} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,oe=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,se=h("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${oe} 1s linear infinite;
`,ie=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ne=f`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,le=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ie} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ne} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ce=h("div")`
  position: absolute;
`,de=h("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,pe=f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ue=h("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${pe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,me=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(ue,null,t):t:a==="blank"?null:c.createElement(de,null,c.createElement(se,{...o}),a!=="loading"&&c.createElement(ce,null,a==="error"?c.createElement(re,{...o}):c.createElement(le,{...o})))},fe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",be="0%{opacity:1;} 100%{opacity:0;}",ye=h("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,xe=h("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ve=(e,t)=>{let a=e.includes("top")?1:-1,[o,s]=Q()?[he,be]:[fe(a),ge(a)];return{animation:t?`${f(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};c.memo(({toast:e,position:t,style:a,children:o})=>{let s=e.height?ve(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(me,{toast:e}),i=c.createElement(xe,{...e.ariaProps},A(e.message,e));return c.createElement(ye,{className:e.className,style:{...s,...a,...e.style}},typeof o=="function"?o({icon:r,message:i}):c.createElement(c.Fragment,null,r,i))});W(c.createElement);w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Se=u;function we({title:e,titleId:t,...a},o){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},a),e?c.createElement("title",{id:t},e):null,c.createElement("path",{fillRule:"evenodd",d:"M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z",clipRule:"evenodd"}))}const $e=c.forwardRef(we);function Ee({title:e,titleId:t,...a},o){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},a),e?c.createElement("title",{id:t},e):null,c.createElement("path",{d:"M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z"}))}const je=c.forwardRef(Ee),Re=F.forwardRef(({className:e},t)=>{const{theme:a,setTheme:o}=I();return E.jsx("button",{name:"theme-switcher",type:"button",className:_("size-8 hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200",e),ref:t,onClick:()=>o(a==="dark"?"light":"dark"),children:a==="light"?E.jsx($e,{}):E.jsx(je,{})})}),Ze="/_build/assets/logo-landing-page-5SISLPWR.png";export{Ze as L,Re as T,Se as _,Ae as u};
