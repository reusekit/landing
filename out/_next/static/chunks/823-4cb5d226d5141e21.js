"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{99376:function(e,t,n){var r=n(35475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},45447:function(e,t,n){let r,o;n.d(t,{v:function(){return A}});var i=n(3078),l=n(53576),s=n(2265),f=n(62035),u=n(45699),a=n(56277),c=n(45414);function d(e,t){let n;let r=()=>{let{currentTime:r}=t,o=(null===r?0:r.value)/100;n!==o&&e(o),n=o};return c.Wi.update(r,!0),()=>(0,c.Pn)(r)}let g=new WeakMap;function h({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=g.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function p(e){e.forEach(h)}let m=new Set;var v=n(81645),y=n(14438);let w=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),E=()=>({time:0,x:w(),y:w()}),W={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function x(e,t,n,r){let o=n[t],{length:i,position:l}=W[t],s=o.current,f=n.time;o.current=e[`scroll${l}`],o.scrollLength=e[`scroll${i}`]-e[`client${i}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,v.Y)(0,o.scrollLength,o.current);let u=r-f;o.velocity=u>50?0:(0,y.R)(o.current-s,u)}var L=n(59111),B=n(88843),b=n(8913);let z={start:0,center:.5,end:1};function H(e,t,n=0){let r=0;if(e in z&&(e=z[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let P=[0,0],O=[[0,0],[1,1]],S={x:0,y:0},k=new WeakMap,N=new WeakMap,R=new WeakMap,T=e=>e===document.documentElement?window:e;function X(e,{container:t=document.documentElement,...n}={}){let i=R.get(t);i||(i=new Set,R.set(t,i));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{x(e,"x",n,t),x(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=O}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):S,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let a=!t[i].interpolate,c=r.length;for(let e=0;e<c;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:P,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,z[e]?e:"0"]),H(o[0],n,r)-H(o[1],t)}(r[e],u[l],f[l],s[i]);a||n===t[i].interpolatorOffsets[e]||(a=!0),t[i].offset[e]=n}a&&(t[i].interpolate=(0,B.s)(t[i].offset,(0,b.Y)(r),{clamp:!1}),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=(0,L.u)(0,1,t[i].interpolate(t[i].current))}(e,n,r)},notify:()=>t(n)}}(t,e,E(),n);if(i.add(l),!k.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(c.frameData.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{c.Wi.read(e,!1,!0),c.Wi.read(n,!1,!0),c.Wi.update(l,!1,!0)};k.set(t,s);let f=T(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&N.set(t,"function"==typeof t?(m.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};m.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{m.delete(t),!m.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(p));let n=(0,u.IG)(e);return n.forEach(e=>{let n=g.get(e);n||(n=new Set,g.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=g.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let s=k.get(t);return c.Wi.read(s,!1,!0),()=>{var e;(0,c.Pn)(s);let n=R.get(t);if(!n||(n.delete(l),n.size))return;let r=k.get(t);k.delete(t),r&&(T(t).removeEventListener("scroll",r),null===(e=N.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}let Y=new Map;function M({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Y.has(t)||Y.set(t,{});let r=Y.get(t);return r[n]||(r[n]=(0,u.tn)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},o=X(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function C(e){return e&&(e.target||e.offset)}var G=n(11534);function $(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let _=()=>({scrollX:(0,i.BX)(0),scrollY:(0,i.BX)(0),scrollXProgress:(0,i.BX)(0),scrollYProgress:(0,i.BX)(0)});function A({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,l.h)(_);return(n?G.L:s.useEffect)(()=>($("target",t),$("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||C(r)?X(t=>{e(t[r.axis].progress,t)},r):d(e,M(r)):function(e,t){if(e.flatten(),C(t))return e.pause(),X(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=M(t);return e.attachTimeline?e.attachTimeline(n,e=>(e.pause(),d(t=>{e.time=e.duration*t},n))):a.Z}}(e,r)}((e,{x:t,y:n})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}}}]);