!function(e){var n={};function t(c){if(n[c])return n[c].exports;var a=n[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(c,a,function(n){return e[n]}.bind(null,a));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var c=t.p+"4e6b0934c94cdfbece14422ef689ffd0.png",a=t.p+"f8c296674459e571eb6fdd227528ac15.png";var d=()=>{const e=document.getElementById("container"),n=document.createElement("div");n.className="header-div";const t=document.createElement("h1");t.innerHTML="Welcome to The Food Hub",t.className="heading";const d=document.createElement("img");d.src=a,d.className="logo";const o=document.createElement("img");o.src=c,o.className="background-img",e.innerHTML="",e.appendChild(n),n.appendChild(d),n.appendChild(t),e.appendChild(o)};var o=()=>{const e=document.getElementById("content"),n=document.createElement("div");n.id="container";const t=document.createElement("div");t.className="nav2";const c=document.createElement("button");c.className="men-button",c.onclick=()=>{c.dispatchEvent(new Event("tabContact",{bubbles:!0})),c.style.background="blue",c.style.color="white"},c.innerHTML="Contact";const a=document.createElement("button");a.className="men-button",a.innerHTML="Menu",a.onclick=()=>{a.dispatchEvent(new Event("tabMenu",{bubbles:!0})),a.style.background="blue",a.style.color="white"};const d=document.createElement("button");d.className="men-button",d.innerHTML="Home",d.onclick=()=>{d.dispatchEvent(new Event("tabHome",{bubbles:!0})),d.style.background="blue",d.style.color="white"},t.appendChild(d),t.appendChild(c),t.appendChild(a),e.appendChild(t),e.appendChild(n)};var l=()=>{const e=document.createElement("div"),n=document.createElement("div");n.className="logo-content";const t=document.createElement("div");t.innerHTML="OUR CONTACTS";const c=document.createElement("ul");c.className="list";const d=document.createElement("li");d.innerHTML="Phone Contact: 0701-042-287, 0712-042-287",d.className="listitem";const o=document.createElement("li");o.innerHTML="Email: foodhub@foodeats.org",o.className="listitem";const l=document.createElement("li");l.innerHTML="Website: WWW.foodhub.com",l.className="listitem";const i=document.createElement("img");i.src=a,i.className="contactLogo",e.appendChild(t);const m=document.getElementById("container");m.innerHTML="",m.appendChild(e),e.appendChild(n),n.appendChild(i),n.appendChild(t),t.appendChild(c),c.appendChild(d),c.appendChild(o),c.appendChild(l)},i=t.p+"c9eda09cf3689e373d5735f87db02d40.png",m=t.p+"99ee1356b19d95df57a97ee18d871b9d.png",r=t.p+"1ed56f6e5f7510e8bc38514d79e080b5.png",s=t.p+"d9847c11e8e91f362f76a877c855db44.jpg";var u=()=>{const e=document.createElement("div");e.className="menu-div";const n=document.createElement("div"),t=document.createElement("div");t.className="desc-container";const c=document.createElement("div"),a=document.createElement("div");a.className="desc-container",n.className="images-container";const d=document.getElementById("container"),o=document.createElement("img");o.className="menu-image",o.src=i;const l=document.createElement("img");l.className="menu-image",l.src=m;const u=document.createElement("img");u.className="menu-image",u.src=s;const p=document.createElement("p");p.innerText="Boiled Chicken";const b=document.createElement("p");b.innerText="Fresh Juice, Beef & Potato";const h=document.createElement("p");h.innerText="Three meal course Buffet";const E=document.createElement("img");o.className="menu-image",o.src=r;const f=document.createElement("img");l.className="menu-image",l.src=s;const g=document.createElement("img");l.className="menu-image",l.src=s,d.innerHTML="",d.appendChild(e),e.appendChild(n),n.appendChild(o),n.appendChild(l),n.appendChild(u),e.appendChild(t),t.appendChild(p),t.appendChild(b),t.appendChild(h),e.appendChild(c),c.appendChild(E),c.appendChild(f),c.appendChild(g),e.appendChild(a),t.appendChild(p),t.appendChild(b),t.appendChild(h)};window.onload=()=>{o(),d();const e=document.getElementById("content");e.addEventListener("tabContact",e=>{l()}),e.addEventListener("tabMenu",e=>{u()}),e.addEventListener("tabHome",e=>{d()})}}]);