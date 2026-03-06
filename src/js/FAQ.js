import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-accordion', {
    duration: 400,
    showMultiple: false,
    collapse: true,
  });
});
