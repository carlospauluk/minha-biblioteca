(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.MinhaBiblioteca={},t.Vue))})(this,function(t,e){"use strict";const r=(o,i)=>{const n=o.__vccOpts||o;for(const[c,d]of i)n[c]=d;return n},s={name:"MeuCompo",components:{},data(){return{}},methods:{}},p={style:{border:"1px solid red",padding:"1rem"}},u=e.createElementVNode("h1",null,"Meu Compo",-1),a=e.createElementVNode("input",{type:"text",placeholder:"Digita aí..."},null,-1);function l(o,i,n,c,d,m){return e.openBlock(),e.createElementBlock("div",p,[u,e.createTextVNode(" Meu Compo: "),a])}const f=r(s,[["render",l]]);t.MeuCompo=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});