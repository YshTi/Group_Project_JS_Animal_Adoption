import{a as c,A as w,R as v}from"./assets/vendor-Dkn6YTDa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();c.defaults.baseURL="https://paw-hut.b.goit.study/api";async function P(){try{return(await c.get("/categories")).data}catch(e){throw e}}async function $(e,r,t){let a=e?{page:r,limit:t,categoryId:e}:{page:r,limit:t};try{return(await c.get("/animals",{params:a})).data}catch(s){throw s}}let g=[],n="all",i=1,u;function A(){return window.innerWidth>=1440?9:8}const d=document.querySelector(".our-pets-categories");d.addEventListener("click",O);async function S(){try{const e=await P();E(e)}catch(e){console.log("Categories load error:",e)}}function E(e){let r=e.map(t=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${t._id}" type="button">${t.name}</button>
      </li>`).join("");d.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" type="button">
          Всі
        </button>
      </li>`+r}function O(e){if(e.target.dataset.id!==n&&e.target.closest("button")){let r=d.querySelector(".active");r&&r.classList.remove("active"),n=e.target.dataset.id,e.target.classList.add("active"),p()}}const m=document.querySelector(".our-pets-list");async function p(e=!1){h(),L(),e||(m.innerHTML="",i=1);const r=n==="all"?"":n,t=A();try{const a=await $(r,i,t);u=Math.ceil(a.totalItems/t),C(a.animals),y(),e?g.push(...a.animals):g=a.animals}catch{console.log("error")}finally{T()}}function C(e){let r=e.map(t=>{let a=t.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${t.image}"
          alt="${t.species}"
        />
        <p class="pets-species">${t.species}</p>
        <h3 class="pets-name">${t.name}</h3>
        <ul class="pets-categories">
          ${a}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${t.age}</li>
          <li class="pets-personal-item">${t.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${t.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${t._id}">Дізнатись більше</button>
      </li>`}).join("");m.insertAdjacentHTML("beforeend",r)}const f=document.querySelector("#pets-pagination");f.addEventListener("click",q);function y(){return u&&i<u?(I(),!0):(h(),!1)}async function q(){y()&&(i+=1,p(!0))}function h(){f.classList.add("IsHidden")}function I(){f.classList.remove("IsHidden")}const b=document.querySelector(".loader");function T(){b.classList.add("IsHidden")}function L(){b.classList.remove("IsHidden")}async function k(){L(),await S(),await p()}k();document.addEventListener("DOMContentLoaded",function(){new w(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0})});const H="https://paw-hut.b.goit.study/api/feedbacks";async function M(e=1){const r={limit:4,page:e};try{return(await c.get(H,{params:r})).data}catch(t){console.log("what error",t)}}const R=document.querySelector(".textFedbacks");function j(e=1){M(e).then(r=>{const t=r.feedbacks.map(({author:a,rate:s,description:o})=>`
          <li class="feedbacks-content">
              <div class="raty-stars" data-score="${s}"></div>

              <div class="feedback-description">${o}</div>
              <div class="feedback-author">${a}</div>
          </li>`).join("");R.innerHTML=t,document.querySelectorAll(".raty-stars").forEach(a=>{const s=a.dataset.score;new v(a,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()})}).catch(r=>console.error(r))}j();
//# sourceMappingURL=index.js.map
