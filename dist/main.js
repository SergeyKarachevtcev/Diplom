(()=>{"use strict";(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-callback"),l=document.querySelector(".modal-close"),c=document.querySelector(".button-services"),n=document.querySelectorAll(".fancyboxModal"),r=()=>{t.style.display="none",o.style.display="none"},s=()=>{t.style.display="flex",o.style.display="block"};e.forEach((e=>{e.addEventListener("click",(()=>{s()}))})),n.forEach((e=>{e.addEventListener("click",(()=>{s()}))})),c.addEventListener("click",(()=>{s()})),l.addEventListener("click",(()=>{r()})),t.addEventListener("click",(e=>{e.target.closest(".modal-callback")||r()}))})(),(()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href"),l=document.querySelector(""+o);l&&l.scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".up"),t=document.getElementById("services");window.addEventListener("scroll",(()=>{const o=t.getBoundingClientRect().top,l=window.innerHeight;e.style.opacity=o<l?"1":"0"}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element");e.querySelectorAll(".element-content"),t.forEach((e=>{e.addEventListener("click",(e=>{if(e.target.closest(".element")){const o=e.target.closest(".element");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),e.querySelector(".element-content").style.display="block"):(e.classList.remove("active"),e.querySelector(".element-content").style.display="none")}))}}))}))})(),(({formId:e,sumeElem:t=[]})=>{const o=document.getElementById(e),l=document.createElement("div"),c=document.querySelectorAll('[name="fio"]'),n=document.querySelectorAll('[name="tel"]');try{if(!o)throw new Error("get form back!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),r=new FormData(o),s={};var a;l.style.color="black",l.textContent="loading...",o.append(l),r.forEach(((e,t)=>{s[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?s[e.id]=t.textContent:"input"===e.type&&(s[e.id]=t.value)})),(e=>{let t=!0;const o=/^(\+)?[0-9()+-]*$/;n.forEach((e=>{o.test(e.value)||(e.style.border="3px solid red",t=!1,setTimeout((function(){e.style.border=""}),3e3))}));const l=/^[а-яА-Я\s]*$/;return c.forEach((e=>{l.test(e.value)||(e.style.border="3px solid red",t=!1,setTimeout((function(){e.style.border=""}),3e3))})),t})()?(a=s,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{l.style.color="black",l.textContent="THX! massager worcs...",e.forEach((e=>{e.value=""})),setTimeout((function(){l.style.color="",l.textContent=""}),3e3)})).catch((t=>{l.style.color="black",l.textContent="Some Error...",setTimeout((function(){l.style.color="",l.textContent="",e.forEach((e=>{e.value=""}))}),3e3)})):(l.style.color="red",l.textContent="form data is not walid",setTimeout((function(){l.style.color="",l.textContent=""}),3e3))})()}))}catch(e){console.log(e.message)}})({formId:"form1",sumeElem:[]})})();