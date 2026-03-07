import{a as l,i as F,S as E,A as N,R as j,b as M,N as A,P as C,c as H}from"./assets/vendor-zibWxtCk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();l.defaults.baseURL="https://paw-hut.b.goit.study/api";async function V(){return(await l.get("/categories")).data}async function G(e,t,a){let o=e?{page:t,limit:a,categoryId:e}:{page:t,limit:a};return(await l.get("/animals",{params:o})).data}function I(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}F.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}async function U(e){return(await l.post("https://paw-hut.b.goit.study/api/orders",e)).data}const S=document.querySelector(".modalCloseButton");function z(e){const t=document.getElementById("form-backdrop");if(!t)return;const a=t.querySelector("form");a&&(a.dataset.animalId=e,t.classList.remove("is-hidden"),document.body.classList.add("modal-open"),a.addEventListener("submit",async o=>{var n,i;if(o.preventDefault(),!a.reportValidity())return;const s={name:a.name.value.trim(),phone:a.tel.value.trim(),animalId:a.dataset.animalId,comment:a.comment.value.trim()};try{await U(s),console.log(s),E.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),y()}catch(R){E.fire({icon:"error",title:"Помилка",text:((i=(n=R.response)==null?void 0:n.data)==null?void 0:i.message)||"Помилка при відправленні заявки"})}},{once:!0}))}function y(){const e=document.getElementById("form-backdrop");if(!e)return;const t=e.querySelector("form");t&&t.reset(),e.classList.add("is-hidden"),document.body.classList.remove("modal-open")}S&&S.addEventListener("click",y);document.addEventListener("click",e=>{const t=document.getElementById("form-backdrop");t&&e.target===t&&y()});document.addEventListener("keydown",e=>{const t=document.getElementById("form-backdrop");t&&e.key==="Escape"&&!t.classList.contains("is-hidden")&&y()});const r={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function J(e){return`
    <img src="${e.image}" alt="${e.name}" class="animal-img" />
    <div class="animal-info-wrapper"> 
        <p class="animal-species">${e.species}</p>
        <h2 class="animal-name">${e.name}</h2>
        
        <p class="animal-meta">
            <span class="meta-key">${e.age}</span> 
            <span class="meta-key">${e.gender}</span>
        </p>

        <ul class="animal-traits-list-2">
            <li class="trait-item">
                <h3 class="trait-title">Опис:</h3>
                <p class="trait-text">${e.description||"Опис скоро з’явиться"}</p>
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
        
        <button type="button" class="btn-adopt" data-animal-id="${e._id||""}"" >Взяти додому</button>
    </div>
  `}function K(e){if(!r.backdrop||!r.modalContent)return;r.modalContent.innerHTML=J(e),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=r.modalContent.querySelector(".btn-adopt");t&&t.addEventListener("click",()=>{const a=t.dataset.animalId;z(a),b()}),window.addEventListener("keydown",_)}function b(){r.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",_)}function _(e){e.code==="Escape"&&b()}var $;($=r.closeBtn)==null||$.addEventListener("click",b);var P;(P=r.backdrop)==null||P.addEventListener("click",e=>{e.target===r.backdrop&&b()});function W(e){return g.find(t=>t._id===e)}let g=[],m="all",p=1,h,q=Q();function Q(){return window.innerWidth>=1440?9:8}const v=document.querySelector(".our-pets-categories");v.addEventListener("click",Z);async function X(){try{const e=await V();Y(e)}catch(e){I(e.status)}}function Y(e){let t=e.map(a=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${a._id}" aria-label="${a.name}" type="button">${a.name}</button>
      </li>`).join("");v.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function Z(e){if(e.target.dataset.id!==m&&e.target.closest("button")){let t=v.querySelector(".active");t&&t.classList.remove("active"),m=e.target.dataset.id,e.target.classList.add("active"),k()}}const L=document.querySelector(".our-pets-list");async function k(e=!1){O(),x(),e||(L.innerHTML="",p=1);const t=m==="all"?"":m;try{const a=await G(t,p,q);h=Math.ceil(a.totalItems/q),ee(a.animals),B(),e?g.push(...a.animals):g=a.animals}catch(a){I(a.status)}finally{se()}}L.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const a=t.dataset.id,o=W(a);o&&K(o)});function ee(e){let t=e.map(a=>{let o=a.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
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
      </li>`}).join("");L.insertAdjacentHTML("beforeend",t)}const w=document.querySelector("#pets-pagination");w.addEventListener("click",te);function B(){return h&&p<h?(ae(),!0):(O(),!1)}async function te(){B()&&(p+=1,k(!0))}function O(){w.classList.add("is-hidden")}function ae(){w.classList.remove("is-hidden")}const T=document.querySelector(".loader");function se(){T.classList.add("is-hidden")}function x(){T.classList.remove("is-hidden")}async function oe(){x(),await X(),await k()}oe();document.addEventListener("DOMContentLoaded",function(){new N(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const a=t.querySelector(".faq-icon use"),o="/Group_Project_JS/img/sprite.svg";t.classList.contains("is-active")?a.setAttribute("href",`${o}#icon-close`):a.setAttribute("href",`${o}#icon-add`)})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const ne="https://paw-hut.b.goit.study/api/feedbacks";async function re(e=1){const t={limit:6,page:e};try{return(await l.get(ne,{params:t})).data}catch(a){console.log("Feedback error:",a)}}const ie=document.querySelector(".textFedbacks");async function ce(e=1){try{const a=(await re(e)).feedbacks.map(({author:o,rate:s,description:n})=>`
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
      `).join("");ie.innerHTML=a,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new j(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new M(".stories-swiper",{modules:[A,C],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const c=document.querySelector(".about-swiper"),d=c==null?void 0:c.closest(".about__slider");c&&d&&new M(c,{modules:[A,C,H],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:d.querySelector(".about__nav--prev"),nextEl:d.querySelector(".about__nav--next")},pagination:{el:d.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const u=document.querySelector(".footer__cat-decor");function D(){if(!u)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{u.style.left=`${t}%`,u.classList.add("is-visible"),setTimeout(()=>{u.classList.remove("is-visible"),D()},4e3)},e)}D();const le=document.querySelector(".nav-burgermenu"),de=document.querySelector(".mobile-close-icon"),f=document.querySelector(".mobile-modal");le.addEventListener("click",()=>{f.classList.add("is-active")});de.addEventListener("click",()=>{f.classList.remove("is-active")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),f.classList.contains("is-active")&&f.classList.remove("is-active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})});ce();
//# sourceMappingURL=index.js.map
