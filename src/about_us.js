import Swiper from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const aboutSwiperEl = document.querySelector(".about-swiper");
const root = aboutSwiperEl?.closest(".about__slider");

if (aboutSwiperEl && root) {
  new Swiper(aboutSwiperEl, {
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    speed: 500,
    loop: false,
    allowTouchMove: true,
    watchOverflow: true,

    a11y: {
      enabled: true,
    },

    navigation: {
      prevEl: root.querySelector(".about__nav--prev"),
      nextEl: root.querySelector(".about__nav--next"),
    },

    pagination: {
      el: root.querySelector(".about__pagination"),
      clickable: true,
      dynamicBullets: false,
    },
  });
}