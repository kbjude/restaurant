!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);var r=(()=>{const e=(e,t)=>{t.forEach(t=>{e.classList.add(t)})};return{createHtmlElement:createHtmlElement,createImage:(t,n,r=[])=>{const a=new Image;return a.src=t,a.alt=n,r!==[]&&e(a,r),a}}})();var a=()=>{const e=document.getElementById("content"),t=r.createElement({tag:"header",parentElement:e,classNames:["header"]}),n=r.createElement({tag:"nav",parentElement:t,classNames:["navbar"]}),a=(r.createElement({tag:"div",parentElement:e,classNames:["mainsection"]}),r.createElement({tag:"div",parentElement:e,classNames:["middlesection","d-flex"]}),r.createElement({tag:"div",parentElement:e,classNames:["lowersection"]}),r.createElement({tag:"div",parentElement:e,classNames:["footersection"]}),r.createElement({tag:"ul",parentElement:n,classNames:["navlist"]}));r.createElement({tag:"li",parentElement:a,elemId:"Home",text:"Home"}),r.createElement({tag:"li",parentElement:a,elemId:"Menu",text:"Menu"}),r.createElement({tag:"li",parentElement:a,elemId:"Contact",text:"Contact"})};n(0);a()}]);