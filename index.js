import{a as u,i as W,S as q,A as z,R as K,b as I,N as M,P as x,c as Y}from"./assets/vendor-zibWxtCk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const f="/Group_Project_JS/assets/hero@1x-DW7JCWY_.webp",B="/Group_Project_JS/assets/hero@2x-BAmaVxfK.webp",l=document.createElement("link");l.rel="preload";l.as="image";l.href=f;l.setAttribute("imagesrcset",`${f} 1x, ${B} 2x`);l.setAttribute("fetchpriority","high");document.head.appendChild(l);function Q(){const e=document.createElement("link");e.rel="preload",e.as="image",e.href=f,e.setAttribute("imagesrcset",`${f} 1x, ${B} 2x`),e.fetchPriority="high",document.head.appendChild(e)}Q();u.defaults.baseURL="https://paw-hut.b.goit.study/api";async function X(){return(await u.get("/categories")).data}async function Z(e,t,a){let o=e?{page:t,limit:a,categoryId:e}:{page:t,limit:a};return(await u.get("/animals",{params:o})).data}function O(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}W.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}async function ee(e){return(await u.post("https://paw-hut.b.goit.study/api/orders",e)).data}const $=document.querySelector(".modalCloseButton");function te(e){const t=document.getElementById("form-backdrop");if(!t)return;const a=t.querySelector("form");a&&(a.dataset.animalId=e,t.classList.remove("is-hidden"),document.body.classList.add("body-no-scroll"),a.addEventListener("submit",async o=>{var r,c;if(o.preventDefault(),!a.name.value.trim()||!a.tel.value.trim()){a.reportValidity();return}const s={name:a.name.value.trim(),phone:a.tel.value.trim(),animalId:a.dataset.animalId,comment:a.comment.value.trim()||"Немає коментаря"};try{ae(),await ee(s),q.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),h()}catch(U){q.fire({icon:"error",title:"Помилка",text:((c=(r=U.response)==null?void 0:r.data)==null?void 0:c.message)||"Помилка при відправленні заявки"})}finally{se()}},{once:!0}))}function h(){const e=document.getElementById("form-backdrop");if(!e)return;const t=e.querySelector("form");t&&t.reset(),e.classList.add("is-hidden"),document.body.classList.remove("body-no-scroll")}$&&$.addEventListener("click",h);document.addEventListener("click",e=>{const t=document.getElementById("form-backdrop");t&&e.target===t&&h()});document.addEventListener("keydown",e=>{const t=document.getElementById("form-backdrop");t&&e.key==="Escape"&&!t.classList.contains("is-hidden")&&h()});const T=document.querySelector("#form-backdrop .loader");function ae(){T.classList.remove("is-hidden")}function se(){T.classList.add("is-hidden")}const n={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function oe(e){return`
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
  `}function re(e){if(!n.backdrop||!n.modalContent)return;n.modalContent.innerHTML=oe(e),n.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=n.modalContent.querySelector(".btn-adopt");t&&t.addEventListener("click",()=>{const a=t.dataset.animalId;te(a),g()}),window.addEventListener("keydown",D)}function g(){n.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",D)}function D(e){e.code==="Escape"&&g()}var _;(_=n.closeBtn)==null||_.addEventListener("click",g);var C;(C=n.backdrop)==null||C.addEventListener("click",e=>{e.target===n.backdrop&&g()});function ne(e){return v.find(t=>t._id===e)}let v=[],y="all",b=1,L,P=ie();function ie(){return window.innerWidth>=1440?9:8}const k=document.querySelector(".our-pets-categories");k.addEventListener("click",de);async function ce(){try{const e=await X();le(e)}catch(e){O(e.status)}}function le(e){let t=e.map(a=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${a._id}" aria-label="${a.name}" type="button">${a.name}</button>
      </li>`).join("");k.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function de(e){if(e.target.dataset.id!==y&&e.target.closest("button")){let t=k.querySelector(".active");t&&t.classList.remove("active"),y=e.target.dataset.id,e.target.classList.add("active"),E()}}const w=document.querySelector(".our-pets-list");async function E(e=!1){j(),N(),e||(w.innerHTML="",b=1);const t=y==="all"?"":y;try{const a=await Z(t,b,P);L=Math.ceil(a.totalItems/P),ue(a.animals),F(),e?v.push(...a.animals):v=a.animals}catch(a){O(a.status)}finally{fe()}}w.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const a=t.dataset.id,o=ne(a);o&&re(o)});function ue(e){let t=e.map(a=>{let o=a.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
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
      </li>`}).join("");w.insertAdjacentHTML("beforeend",t)}const S=document.querySelector("#pets-pagination");S.addEventListener("click",me);function F(){return L&&b<L?(pe(),!0):(j(),!1)}async function me(){F()&&(b+=1,E(!0))}function j(){S.classList.add("is-hidden")}function pe(){S.classList.remove("is-hidden")}const R=document.querySelector(".loader");function fe(){R.classList.add("is-hidden")}function N(){R.classList.remove("is-hidden")}async function ye(){N(),await ce(),await E()}ye();const A="/Group_Project_JS/assets/sprite-DBtBz0EI.svg";document.addEventListener("DOMContentLoaded",function(){new z(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const a=t.querySelector(".faq-icon use");t.classList.contains("is-active")?a.setAttribute("href",`${A}#icon-close`):a.setAttribute("href",`${A}#icon-add`)})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const be="https://paw-hut.b.goit.study/api/feedbacks";async function he(e=1){const t={limit:6,page:e};try{return(await u.get(be,{params:t})).data}catch(a){console.log("Feedback error:",a)}}const ge=document.querySelector(".textFedbacks");async function ve(e=1){try{const a=(await he(e)).feedbacks.map(({author:o,rate:s,description:r})=>`
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
      `).join("");ge.innerHTML=a,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new K(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new I(".stories-swiper",{modules:[M,x],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const d=document.querySelector(".about-swiper"),m=d==null?void 0:d.closest(".about__slider");d&&m&&new I(d,{modules:[M,x,Y],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:m.querySelector(".about__nav--prev"),nextEl:m.querySelector(".about__nav--next")},pagination:{el:m.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const p=document.querySelector(".footer__cat-decor");function H(){if(!p)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{p.style.left=`${t}%`,p.classList.add("is-visible"),setTimeout(()=>{p.classList.remove("is-visible"),H()},4e3)},e)}H();const V=document.querySelector(".nav-burgermenu"),G=document.querySelector(".mobile-close-icon"),i=document.querySelector(".mobile-modal"),J=document.querySelector("body");V.addEventListener("click",()=>{i.classList.add("is-active"),J.style.overflow="hidden"});G.addEventListener("click",()=>{i.classList.remove("is-active"),J.style.overflow="auto"});V.addEventListener("click",()=>{i.classList.add("is-active")});G.addEventListener("click",()=>{i.classList.remove("is-active")});document.addEventListener("keydown",e=>{e.key==="Escape"&&i.classList.contains("is-active")&&i.classList.remove("is-active")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),i.classList.contains("is-active")&&i.classList.remove("is-active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})});ve();
//# sourceMappingURL=index.js.map
