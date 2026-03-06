import { getFeedback } from './comments_service';
import Raty from 'raty-js';
import 'raty-js/src/raty.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const feedbackContainer = document.querySelector('.textFedbacks');

export async function render(page = 1) {
  try {
    const data = await getFeedback(page);

    const markup = data.feedbacks
      .map(
        ({ author, rate, description }) => `
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${rate}"></div>

            <p class="feedback-description">
              ${description}
            </p>

            <p class="feedback-author">
              ${author}
            </p>

          </div>
        </li>
      `
      )
      .join('');

    feedbackContainer.innerHTML = markup;

    /* stars */

    document.querySelectorAll('.raty-stars').forEach(el => {
      const score = el.dataset.score;

      new Raty(el, {
        starType: 'i',
        score: score,
        readOnly: true,
        halfShow: true,
      }).init();
    });

    /* swiper */

    new Swiper('.stories-swiper', {
      modules: [Navigation, Pagination],

      slidesPerView: 1,
      spaceBetween: 32,

      navigation: {
        nextEl: '.stories-next',
        prevEl: '.stories-prev',
      },

      pagination: {
        el: '.stories-pagination',
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}