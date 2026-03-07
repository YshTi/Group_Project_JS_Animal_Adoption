import{a as l,S as E,i as D,A as R,R as N,b as M,N as C,P as _,c as j}from"./assets/vendor-DHKkeu8E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();async function F(e){return(await l.post("https://paw-hut.b.goit.study/api/orders",e)).data}const i=document.querySelector("form"),m=document.querySelector(".backdrop"),V=document.querySelector(".modalCloseButton");function y(){m.classList.add("isHidden"),i.reset(),document.body.classList.remove("body-no-scroll")}V.addEventListener("click",y);m.addEventListener("click",e=>{e.target===m&&y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!m.classList.contains("isHidden")&&y()});i.addEventListener("submit",async e=>{var a,o;if(e.preventDefault(),!i.reportValidity())return;const t={name:i.name.value.trim(),phone:i.tel.value.trim(),animalId:"667ad1b8e4b01a2b3c4d5e55",comment:i.comment.value.trim()};try{await F(t),console.log(t),E.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),y()}catch(s){E.fire({icon:"error",title:"Помилка",text:((o=(a=s.response)==null?void 0:a.data)==null?void 0:o.message)||"Помилка при відправленні заявки"})}});l.defaults.baseURL="https://paw-hut.b.goit.study/api";async function U(){return(await l.get("/categories")).data}async function G(e,t,a){let o=e?{page:t,limit:a,categoryId:e}:{page:t,limit:a};return(await l.get("/animals",{params:o})).data}function A(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}D.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}const r={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function z(e){var a;const t=((a=e.categories)==null?void 0:a.map(o=>o.name).join(", "))||"Тваринка";return`
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
  `}function K(e){!r.backdrop||!r.modalContent||(r.modalContent.innerHTML=z(e),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",T))}function v(){r.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",T)}function T(e){e.code==="Escape"&&v()}var P;(P=r.closeBtn)==null||P.addEventListener("click",v);var q;(q=r.backdrop)==null||q.addEventListener("click",e=>{e.target===r.backdrop&&v()});function W(e){return b.find(t=>t._id===e)}let b=[],p="all",f=1,h,S=J();function J(){return window.innerWidth>=1440?9:8}const L=document.querySelector(".our-pets-categories");L.addEventListener("click",Y);async function Q(){try{const e=await U();X(e)}catch(e){A(e.status)}}function X(e){let t=e.map(a=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${a._id}" aria-label="${a.name}" type="button">${a.name}</button>
      </li>`).join("");L.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function Y(e){if(e.target.dataset.id!==p&&e.target.closest("button")){let t=L.querySelector(".active");t&&t.classList.remove("active"),p=e.target.dataset.id,e.target.classList.add("active"),k()}}const w=document.querySelector(".our-pets-list");async function k(e=!1){O(),B(),e||(w.innerHTML="",f=1);const t=p==="all"?"":p;try{const a=await G(t,f,S);h=Math.ceil(a.totalItems/S),Z(a.animals),I(),e?b.push(...a.animals):b=a.animals}catch(a){A(a.status)}finally{ae()}}w.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const a=t.dataset.id,o=W(a);o&&K(o)});function Z(e){let t=e.map(a=>{let o=a.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
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
      </li>`}).join("");w.insertAdjacentHTML("beforeend",t)}const $=document.querySelector("#pets-pagination");$.addEventListener("click",ee);function I(){return h&&f<h?(te(),!0):(O(),!1)}async function ee(){I()&&(f+=1,k(!0))}function O(){$.classList.add("IsHidden")}function te(){$.classList.remove("IsHidden")}const x=document.querySelector(".loader");function ae(){x.classList.add("IsHidden")}function B(){x.classList.remove("IsHidden")}async function se(){B(),await Q(),await k()}se();document.addEventListener("DOMContentLoaded",function(){new R(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0})});const oe="https://paw-hut.b.goit.study/api/feedbacks";async function ne(e=1){const t={limit:6,page:e};try{return(await l.get(oe,{params:t})).data}catch(a){console.log("Feedback error:",a)}}const re=document.querySelector(".textFedbacks");async function ie(e=1){try{const a=(await ne(e)).feedbacks.map(({author:o,rate:s,description:n})=>`
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
      `).join("");re.innerHTML=a,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new N(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new M(".stories-swiper",{modules:[C,_],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const c=document.querySelector(".about-swiper"),d=c==null?void 0:c.closest(".about__slider");c&&d&&new M(c,{modules:[C,_,j],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:d.querySelector(".about__nav--prev"),nextEl:d.querySelector(".about__nav--next")},pagination:{el:d.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const u=document.querySelector(".footer__cat-decor");function H(){if(!u)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{u.style.left=`${t}%`,u.classList.add("is-visible"),setTimeout(()=>{u.classList.remove("is-visible"),H()},4e3)},e)}H();ie();
//# sourceMappingURL=index.js.map
