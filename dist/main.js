!function(e){var n={};function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(o,c,function(n){return e[n]}.bind(null,c));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=t.p+"4e6b0934c94cdfbece14422ef689ffd0.png",c=t.p+"f8c296674459e571eb6fdd227528ac15.png";var a=()=>{const e=document.getElementById("container"),n=document.createElement("div");n.className="header-div";const t=document.createElement("h1");t.innerHTML="Welcome to The Food Hub",t.className="heading";const a=document.createElement("img");a.src=c,a.className="logo";const d=document.createElement("img");d.src=o,d.className="background-img",e.innerHTML="",e.appendChild(n),n.appendChild(a),n.appendChild(t),e.appendChild(d)};var d=()=>{const e=document.getElementById("content"),n=document.createElement("div");n.id="container";const t=document.createElement("div");t.className="nav2";const o=document.createElement("button");o.className="men-button",o.onclick=()=>{o.dispatchEvent(new Event("tabContact",{bubbles:!0})),o.style.background="blue",o.style.color="white"},o.innerHTML="Contact";const c=document.createElement("button");c.className="men-button",c.innerHTML="Menu",c.onclick=()=>{c.dispatchEvent(new Event("tabMenu",{bubbles:!0})),c.style.background="blue",c.style.color="white"};const a=document.createElement("button");a.className="men-button",a.innerHTML="Home",a.onclick=()=>{a.dispatchEvent(new Event("tabHome",{bubbles:!0})),a.style.background="blue",a.style.color="white"},t.appendChild(a),t.appendChild(o),t.appendChild(c),e.appendChild(t),e.appendChild(n)};var r=()=>{const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div");o.innerHTML="These are our contacts: Phone Number: 07038920832 Email: kbjude@gmail.com";const a=document.createElement("img");a.src=c,a.className="contactLogo",e.appendChild(t);const d=document.getElementById("container");d.innerHTML="",d.appendChild(e),d.appendChild(n),n.appendChild(a),n.appendChild(t),t.hasPointerCapture(o)};var l=()=>{const e=document.createElement("div");e.innerHTML="Coming Soon";const n=document.getElementById("container");n.innerHTML="",n.appendChild(e)};window.onload=()=>{d(),a();const e=document.getElementById("content");e.addEventListener("tabContact",e=>{r()}),e.addEventListener("tabMenu",e=>{l()}),e.addEventListener("tabHome",e=>{a()})}}]);