import{_ as C}from"./Container.262a40e9.js";import{_ as m}from"./MainButton.vue_vue_type_script_setup_true_lang.c9e59a40.js";import{a as k,b as x}from"./provider.db0932ca.js";import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{h as n,z as l,A as s,I as y,N as f,u as i,v as b,C as B,J as S,O as $,j,E as u,k as p}from"./index.bc39844c.js";import{u as w}from"./wallet.17284c08.js";import{u as M}from"./index.f4be9492.js";import{u as E}from"./error.551bd5c0.js";const N={};function L(r,e){const t=m;return n(),l(t,{onClick:i(k)},{default:s(()=>[y(r.$slots,"default",{},()=>[f("Connect")])]),_:3},8,["onClick"])}const O=d(N,[["render",L]]),R=b({__name:"UserMenu",setup(r){const e=w(),t=x(),c=M("connected",!1),a=E();B(()=>{var o;(o=t.value)==null||o.on("accountsChanged",_=>{a.value=void 0,e.address=_.length>0?_[0]:void 0,c.value=!!e.address})});const g=o=>o.slice(0,5)+"..."+o.slice(-4);return(o,_)=>{const h=O,v=m;return i(e).address?(n(),l(v,{key:1},{default:s(()=>[f(S(g(i(e).address)),1)]),_:1})):(n(),l(h,{key:0}))}}}),V="/assets/logo.9467d742.png",z={},A={class:"py-4"},H={class:"flex flex-col items-center justify-center sm:flex-row sm:justify-between"},P=p("img",{alt:"Logo",class:"mb-6 w-48 sm:mb-0",src:V},null,-1);function T(r,e){const t=$("RouterLink"),c=R,a=C;return n(),j("header",A,[u(a,null,{default:s(()=>[p("div",H,[u(t,{to:"/"},{default:s(()=>[P]),_:1}),u(c)])]),_:1})])}const U=d(z,[["render",T]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{Q as H,O as _,U as a};
