import{a as c,A as L,R as P,S as v,N as S,P as $}from"./assets/vendor-CIqe7luc.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();c.defaults.baseURL="https://paw-hut.b.goit.study/api";async function A(){try{return(await c.get("/categories")).data}catch(e){throw e}}async function k(e,a,t){let r=e?{page:a,limit:t,categoryId:e}:{page:a,limit:t};try{return(await c.get("/animals",{params:r})).data}catch(s){throw s}}let g=[],n="all",i=1,d;function E(){return window.innerWidth>=1440?9:8}const u=document.querySelector(".our-pets-categories");u.addEventListener("click",q);async function C(){try{const e=await A();O(e)}catch(e){console.log("Categories load error:",e)}}function O(e){let a=e.map(t=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${t._id}" type="button">${t.name}</button>
      </li>`).join("");u.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" type="button">
          Всі
        </button>
      </li>`+a}function q(e){if(e.target.dataset.id!==n&&e.target.closest("button")){let a=u.querySelector(".active");a&&a.classList.remove("active"),n=e.target.dataset.id,e.target.classList.add("active"),p()}}const m=document.querySelector(".our-pets-list");async function p(e=!1){h(),w(),e||(m.innerHTML="",i=1);const a=n==="all"?"":n,t=E();try{const r=await k(a,i,t);d=Math.ceil(r.totalItems/t),I(r.animals),y(),e?g.push(...r.animals):g=r.animals}catch{console.log("error")}finally{M()}}function I(e){let a=e.map(t=>{let r=t.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${t.image}"
          alt="${t.species}"
        />
        <p class="pets-species">${t.species}</p>
        <h3 class="pets-name">${t.name}</h3>
        <ul class="pets-categories">
          ${r}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${t.age}</li>
          <li class="pets-personal-item">${t.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${t.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${t._id}">Дізнатись більше</button>
      </li>`}).join("");m.insertAdjacentHTML("beforeend",a)}const f=document.querySelector("#pets-pagination");f.addEventListener("click",T);function y(){return d&&i<d?(H(),!0):(h(),!1)}async function T(){y()&&(i+=1,p(!0))}function h(){f.classList.add("IsHidden")}function H(){f.classList.remove("IsHidden")}const b=document.querySelector(".loader");function M(){b.classList.add("IsHidden")}function w(){b.classList.remove("IsHidden")}async function N(){w(),await C(),await p()}N();document.addEventListener("DOMContentLoaded",function(){new L(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0})});const R="https://paw-hut.b.goit.study/api/feedbacks";async function j(e=1){const a={limit:6,page:e};try{return(await c.get(R,{params:a})).data}catch(t){console.log("Feedback error:",t)}}const B=document.querySelector(".textFedbacks");async function _(e=1){try{const t=(await j(e)).feedbacks.map(({author:r,rate:s,description:o})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${s}"></div>

            <p class="feedback-description">
              ${o}
            </p>

            <p class="feedback-author">
              ${r}
            </p>

          </div>
        </li>
      `).join("");B.innerHTML=t,document.querySelectorAll(".raty-stars").forEach(r=>{const s=r.dataset.score;new P(r,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new v(".stories-swiper",{modules:[S,$],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(a){console.log(a)}}_();
//# sourceMappingURL=index.js.map
