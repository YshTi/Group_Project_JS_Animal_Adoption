import{a as p,i as O,A as x,R as B,S as P,N as S,P as E,b as H}from"./assets/vendor-BAUn6vQ9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();p.defaults.baseURL="https://paw-hut.b.goit.study/api";async function R(){return(await p.get("/categories")).data}async function D(e,t,a){let o=e?{page:t,limit:a,categoryId:e}:{page:t,limit:a};return(await p.get("/animals",{params:o})).data}function M(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}O.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}const r={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function N(e){var a;const t=((a=e.categories)==null?void 0:a.map(o=>o.name).join(", "))||"Тваринка";return`
    <img src="${e.image}" alt="${e.name}" class="animal-img" />
    <div class="animal-info-wrapper"> 
        <p class="animal-species">${t}</p>
        <h2 class="animal-name">${e.name}</h2>
        
        <p class="animal-meta">
            <span class="meta-key">${e.age}</span> 
            <span class="meta-key">${e.gender}</span>
        </p>

        <ul class="animal-traits-list-2">
            <li class="trait-item">
                <h3 class="trait-title">Опис:</h3>
                <p class="trait-text">${e.shortDescription||"Опис скоро з’явиться"}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Здоров’я:</h3>
                <p class="trait-text">${e.health||"Тваринка здорова та обстежена"}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Поведінка:</h3>
                <p class="trait-text">${e.behavior||"Спокійна та дружелюбна"}</p>
            </li>
        </ul>
        
        <button type="button" class="btn-adopt" id="btn-open-form">Взяти додому</button>
    </div>
  `}function j(e){!r.backdrop||!r.modalContent||(r.modalContent.innerHTML=N(e),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",q))}function y(){r.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",q)}function q(e){e.code==="Escape"&&y()}var k;(k=r.closeBtn)==null||k.addEventListener("click",y);var $;($=r.backdrop)==null||$.addEventListener("click",e=>{e.target===r.backdrop&&y()});function F(e){return f.find(t=>t._id===e)}let f=[],d="all",u=1,g,L=U();function U(){return window.innerWidth>=1440?9:8}const b=document.querySelector(".our-pets-categories");b.addEventListener("click",z);async function V(){try{const e=await R();G(e)}catch(e){M(e.status)}}function G(e){let t=e.map(a=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${a._id}" aria-label="${a.name}" type="button">${a.name}</button>
      </li>`).join("");b.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function z(e){if(e.target.dataset.id!==d&&e.target.closest("button")){let t=b.querySelector(".active");t&&t.classList.remove("active"),d=e.target.dataset.id,e.target.classList.add("active"),w()}}const h=document.querySelector(".our-pets-list");async function w(e=!1){C(),T(),e||(h.innerHTML="",u=1);const t=d==="all"?"":d;try{const a=await D(t,u,L);g=Math.ceil(a.totalItems/L),K(a.animals),_(),e?f.push(...a.animals):f=a.animals}catch(a){M(a.status)}finally{Q()}}h.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const a=t.dataset.id,o=F(a);o&&j(o)});function K(e){let t=e.map(a=>{let o=a.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${a.image}"
          alt="${a.species}"
        />
        <p class="pets-species">${a.species}</p>
        <h3 class="pets-name">${a.name}</h3>
        <ul class="pets-categories">
          ${o}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${a.age}</li>
          <li class="pets-personal-item">${a.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${a.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${a._id}" aria-label="Дізнатись більше про ${a.name}">Дізнатись більше</button>
      </li>`}).join("");h.insertAdjacentHTML("beforeend",t)}const v=document.querySelector("#pets-pagination");v.addEventListener("click",W);function _(){return g&&u<g?(J(),!0):(C(),!1)}async function W(){_()&&(u+=1,w(!0))}function C(){v.classList.add("IsHidden")}function J(){v.classList.remove("IsHidden")}const A=document.querySelector(".loader");function Q(){A.classList.add("IsHidden")}function T(){A.classList.remove("IsHidden")}async function X(){T(),await V(),await w()}X();document.addEventListener("DOMContentLoaded",function(){new x(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0})});const Y="https://paw-hut.b.goit.study/api/feedbacks";async function Z(e=1){const t={limit:6,page:e};try{return(await p.get(Y,{params:t})).data}catch(a){console.log("Feedback error:",a)}}const ee=document.querySelector(".textFedbacks");async function te(e=1){try{const a=(await Z(e)).feedbacks.map(({author:o,rate:s,description:n})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${s}"></div>

            <p class="feedback-description">
              ${n}
            </p>

            <p class="feedback-author">
              ${o}
            </p>

          </div>
        </li>
      `).join("");ee.innerHTML=a,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new B(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new P(".stories-swiper",{modules:[S,E],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const i=document.querySelector(".about-swiper"),c=i==null?void 0:i.closest(".about__slider");i&&c&&new P(i,{modules:[S,E,H],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:c.querySelector(".about__nav--prev"),nextEl:c.querySelector(".about__nav--next")},pagination:{el:c.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const l=document.querySelector(".footer__cat-decor");function I(){if(!l)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{l.style.left=`${t}%`,l.classList.add("is-visible"),setTimeout(()=>{l.classList.remove("is-visible"),I()},4e3)},e)}I();te();
//# sourceMappingURL=index.js.map
