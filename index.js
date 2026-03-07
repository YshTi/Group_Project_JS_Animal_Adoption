import{a as l,i as R,S,A as F,R as N,b as A,N as I,P as C,c as j}from"./assets/vendor-zibWxtCk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();l.defaults.baseURL="https://paw-hut.b.goit.study/api";async function V(){return(await l.get("/categories")).data}async function U(e,t,a){let o=e?{page:t,limit:a,categoryId:e}:{page:t,limit:a};return(await l.get("/animals",{params:o})).data}function B(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}R.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}async function G(e){return(await l.post("https://paw-hut.b.goit.study/api/orders",e)).data}const i=document.querySelector("form"),q=document.querySelector(".modalCloseButton");function z(){const e=document.getElementById("form-backdrop");e&&(e.classList.remove("is-hidden"),document.body.classList.add("modal-open"))}function b(){const e=document.getElementById("form-backdrop");e&&(e.classList.add("is-hidden"),i.reset(),document.body.classList.remove("modal-open"))}q&&q.addEventListener("click",b);document.addEventListener("click",e=>{const t=document.getElementById("form-backdrop");t&&e.target===t&&b()});document.addEventListener("keydown",e=>{const t=document.getElementById("form-backdrop");t&&e.key==="Escape"&&!t.classList.contains("is-hidden")&&b()});i&&i.addEventListener("submit",async e=>{var a,o;if(e.preventDefault(),!i.reportValidity())return;const t={name:i.name.value.trim(),phone:i.tel.value.trim(),animalId:"667ad1b8e4b01a2b3c4d5e55",comment:i.comment.value.trim()};try{await G(t),console.log(t),S.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),b()}catch(s){S.fire({icon:"error",title:"Помилка",text:((o=(a=s.response)==null?void 0:a.data)==null?void 0:o.message)||"Помилка при відправленні заявки"})}});const r={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function K(e){var a;const t=((a=e.categories)==null?void 0:a.map(o=>o.name).join(", "))||"Тваринка";return`
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
        
        <button type="button" class="btn-adopt" id="btn-open-form">Взяти додому</button>
    </div>
  `}function W(e){if(!r.backdrop||!r.modalContent)return;r.modalContent.innerHTML=K(e),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=document.getElementById("btn-open-form");t&&t.addEventListener("click",()=>{z(),y()}),window.addEventListener("keydown",_)}function y(){r.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",_)}function _(e){e.code==="Escape"&&y()}var P;(P=r.closeBtn)==null||P.addEventListener("click",y);var M;(M=r.backdrop)==null||M.addEventListener("click",e=>{e.target===r.backdrop&&y()});function J(e){return h.find(t=>t._id===e)}let h=[],m="all",p=1,v,$=Q();function Q(){return window.innerWidth>=1440?9:8}const L=document.querySelector(".our-pets-categories");L.addEventListener("click",Z);async function X(){try{const e=await V();Y(e)}catch(e){B(e.status)}}function Y(e){let t=e.map(a=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${a._id}" aria-label="${a.name}" type="button">${a.name}</button>
      </li>`).join("");L.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function Z(e){if(e.target.dataset.id!==m&&e.target.closest("button")){let t=L.querySelector(".active");t&&t.classList.remove("active"),m=e.target.dataset.id,e.target.classList.add("active"),w()}}const k=document.querySelector(".our-pets-list");async function w(e=!1){T(),D(),e||(k.innerHTML="",p=1);const t=m==="all"?"":m;try{const a=await U(t,p,$);v=Math.ceil(a.totalItems/$),ee(a.animals),O(),e?h.push(...a.animals):h=a.animals}catch(a){B(a.status)}finally{se()}}k.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const a=t.dataset.id,o=J(a);o&&W(o)});function ee(e){let t=e.map(a=>{let o=a.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
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
      </li>`}).join("");k.insertAdjacentHTML("beforeend",t)}const E=document.querySelector("#pets-pagination");E.addEventListener("click",te);function O(){return v&&p<v?(ae(),!0):(T(),!1)}async function te(){O()&&(p+=1,w(!0))}function T(){E.classList.add("IsHidden")}function ae(){E.classList.remove("IsHidden")}const x=document.querySelector(".loader");function se(){x.classList.add("IsHidden")}function D(){x.classList.remove("IsHidden")}async function oe(){D(),await X(),await w()}oe();document.addEventListener("DOMContentLoaded",function(){new F(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const a=t.querySelector(".faq-icon use");t.classList.contains("is-active")?a.setAttribute("href","/img/sprite.svg#icon-close"):a.setAttribute("href","/img/sprite.svg#icon-add")})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const ne="https://paw-hut.b.goit.study/api/feedbacks";async function re(e=1){const t={limit:6,page:e};try{return(await l.get(ne,{params:t})).data}catch(a){console.log("Feedback error:",a)}}const ie=document.querySelector(".textFedbacks");async function ce(e=1){try{const a=(await re(e)).feedbacks.map(({author:o,rate:s,description:n})=>`
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
      `).join("");ie.innerHTML=a,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new N(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new A(".stories-swiper",{modules:[I,C],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const c=document.querySelector(".about-swiper"),d=c==null?void 0:c.closest(".about__slider");c&&d&&new A(c,{modules:[I,C,j],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:d.querySelector(".about__nav--prev"),nextEl:d.querySelector(".about__nav--next")},pagination:{el:d.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const u=document.querySelector(".footer__cat-decor");function H(){if(!u)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{u.style.left=`${t}%`,u.classList.add("is-visible"),setTimeout(()=>{u.classList.remove("is-visible"),H()},4e3)},e)}H();const le=document.querySelector(".nav-burgermenu"),de=document.querySelector(".mobile-close-icon"),f=document.querySelector(".mobile-modal");le.addEventListener("click",()=>{f.classList.add("is-active")});de.addEventListener("click",()=>{f.classList.remove("is-active")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),f.classList.contains("is-active")&&f.classList.remove("is-active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})});ce();
//# sourceMappingURL=index.js.map
