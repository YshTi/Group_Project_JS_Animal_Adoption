import { getFeedback } from './comments_service';
import Raty from 'raty-js';
import 'raty-js/src/raty.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const textElement = document.querySelector('.textFedbacks');

export function render(page = 1) {
  getFeedback(page)
    .then(data => {
      const markup = data.feedbacks
        .map(({ author, rate, description }) => {
          return `
          <li class="feedbacks-content">
              <div class="raty-stars" data-score="${rate}"></div>

              <div class="feedback-description">${description}</div>
              <div class="feedback-author">${author}</div>
          </li>`;
        })
        .join('');

      textElement.innerHTML = markup;

      document.querySelectorAll('.raty-stars').forEach(el => {
        const score = el.dataset.score;
        new Raty(el, {
          starType: 'i',
          score: score,
          readOnly: true,
          halfShow: true,
        }).init();
      });
    })
    .catch(err => console.error(err));
}
