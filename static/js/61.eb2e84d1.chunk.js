(this["webpackJsonpcarbon-copy"]=this["webpackJsonpcarbon-copy"]||[]).push([[61],{79:function(r,n,t){!function(r){"use strict";r.defineMode("http",(function(){function r(r,n){return r.skipToEnd(),n.cur=c,"error"}function n(n,e){return n.match(/^HTTP\/\d\.\d/)?(e.cur=t,"keyword"):n.match(/^[A-Z]+/)&&/[ \t]/.test(n.peek())?(e.cur=u,"keyword"):r(n,e)}function t(n,t){var u=n.match(/^\d+/);if(!u)return r(n,t);t.cur=e;var o=Number(u[0]);return o>=100&&o<200?"positive informational":o>=200&&o<300?"positive success":o>=300&&o<400?"positive redirect":o>=400&&o<500?"negative client-error":o>=500&&o<600?"negative server-error":"error"}function e(r,n){return r.skipToEnd(),n.cur=c,null}function u(r,n){return r.eatWhile(/\S/),n.cur=o,"string-2"}function o(n,t){return n.match(/^HTTP\/\d\.\d$/)?(t.cur=c,"keyword"):r(n,t)}function c(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function i(r){return r.skipToEnd(),null}return{token:function(r,n){var t=n.cur;return t!=c&&t!=i&&r.eatSpace()?null:t(r,n)},blankLine:function(r){r.cur=i},startState:function(){return{cur:n}}}})),r.defineMIME("message/http","http")}(t(3))}}]);
//# sourceMappingURL=61.eb2e84d1.chunk.js.map