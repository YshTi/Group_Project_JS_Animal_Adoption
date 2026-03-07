import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.faq-accordion', {
    duration: 400,
    showMultiple: false,
    collapse: true,
  });

  // Функція оновлення іконок
  function updateIcons() {
    document.querySelectorAll('.faq-accordion .ac').forEach(item => {
      const icon = item.querySelector('.faq-icon use');
      if (item.classList.contains('is-active')) {
        icon.setAttribute('href', '/img/sprite.svg#icon-close');
      } else {
        icon.setAttribute('href', '/img/sprite.svg#icon-add');
      }
    });
  }

  // Після кожного кліку на будь-яку секцію
  document.querySelectorAll('.faq-accordion .ac').forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(updateIcons, 50); // невелика пауза, щоб Accordion.js встиг змінити класи
    });
  });

  // Початкове оновлення іконок
  updateIcons();
});
