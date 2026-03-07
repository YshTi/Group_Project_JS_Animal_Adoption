import{a as d,A,R as k,S as b,N as w,P as L,b as E}from"./assets/vendor-CVBrCGGB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();d.defaults.baseURL="https://paw-hut.b.goit.study/api";async function M(){try{return(await d.get("/categories")).data}catch(e){throw e}}async function C(e,a,t){let o=e?{page:a,limit:t,categoryId:e}:{page:a,limit:t};try{return(await d.get("/animals",{params:o})).data}catch(s){throw s}}let h=[],l="all",u=1,f;function O(){return window.innerWidth>=1440?9:8}const m=document.querySelector(".our-pets-categories");m.addEventListener("click",H);async function T(){try{const e=await M();I(e)}catch(e){console.log("Categories load error:",e)}}function I(e){let a=e.map(t=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${t._id}" type="button">${t.name}</button>
      </li>`).join("");m.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" type="button">
          Всі
        </button>
      </li>`+a}function H(e){if(e.target.dataset.id!==l&&e.target.closest("button")){let a=m.querySelector(".active");a&&a.classList.remove("active"),l=e.target.dataset.id,e.target.classList.add("active"),g()}}const v=document.querySelector(".our-pets-list");async function g(e=!1){S(),_(),e||(v.innerHTML="",u=1);const a=l==="all"?"":l,t=O();try{const o=await C(a,u,t);f=Math.ceil(o.totalItems/t),N(o.animals),P(),e?h.push(...o.animals):h=o.animals}catch{console.log("error")}finally{B()}}function N(e){let a=e.map(t=>{let o=t.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${t.image}"
          alt="${t.species}"
        />
        <p class="pets-species">${t.species}</p>
        <h3 class="pets-name">${t.name}</h3>
        <ul class="pets-categories">
          ${o}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${t.age}</li>
          <li class="pets-personal-item">${t.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${t.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${t._id}">Дізнатись більше</button>
      </li>`}).join("");v.insertAdjacentHTML("beforeend",a)}const y=document.querySelector("#pets-pagination");y.addEventListener("click",R);function P(){return f&&u<f?(x(),!0):(S(),!1)}async function R(){P()&&(u+=1,g(!0))}function S(){y.classList.add("IsHidden")}function x(){y.classList.remove("IsHidden")}const $=document.querySelector(".loader");function B(){$.classList.add("IsHidden")}function _(){$.classList.remove("IsHidden")}async function j(){_(),await T(),await g()}j();document.addEventListener("DOMContentLoaded",function(){new A(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0})});const D="https://paw-hut.b.goit.study/api/feedbacks";async function F(e=1){const a={limit:6,page:e};try{return(await d.get(D,{params:a})).data}catch(t){console.log("Feedback error:",t)}}const U=document.querySelector(".textFedbacks");async function V(e=1){try{const t=(await F(e)).feedbacks.map(({author:o,rate:s,description:r})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${s}"></div>

            <p class="feedback-description">
              ${r}
            </p>

            <p class="feedback-author">
              ${o}
            </p>

          </div>
        </li>
      `).join("");U.innerHTML=t,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new k(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new b(".stories-swiper",{modules:[w,L],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(a){console.log(a)}}const n=document.querySelector(".about-swiper"),i=n==null?void 0:n.closest(".about__slider");n&&i&&new b(n,{modules:[w,L,E],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:i.querySelector(".about__nav--prev"),nextEl:i.querySelector(".about__nav--next")},pagination:{el:i.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const c=document.querySelector(".footer__cat-decor");function q(){if(!c)return;const e=Math.floor(Math.random()*8e3)+40,a=Math.floor(Math.random()*81)+5;setTimeout(()=>{c.style.left=`${a}%`,c.classList.add("is-visible"),setTimeout(()=>{c.classList.remove("is-visible"),q()},4e3)},e)}q();V();
//# sourceMappingURL=index.js.map
