(()=>{"use strict";const e=()=>{const e=document.querySelectorAll(".callback-btn"),l=document.querySelector(".modal-overlay"),c=document.querySelector(".modal-callback"),t=document.querySelector(".modal-close"),o=document.querySelector(".button-services"),a=document.querySelectorAll(".fancyboxModal"),d=()=>{l.style.display="none",c.style.display="none"},n=()=>{l.style.display="flex",c.style.display="block"};e.forEach((e=>{e.addEventListener("click",(()=>{n()}))})),a.forEach((e=>{e.addEventListener("click",(()=>{n()}))})),o.addEventListener("click",(()=>{n()})),t.addEventListener("click",(()=>{d()})),l.addEventListener("click",(e=>{e.target.closest(".modal-callback")||d()}))};e(),e()})();