import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import createOrder from './api';

const form = document.querySelector('form');
const backdrop = document.querySelector('.backdrop');
const modalCloseButton = document.querySelector('.modalCloseButton');

function openModal() {
  backdrop.classList.remove('isHidden');
  document.body.classList.add('body-no-scroll');
}

function closeModal() {
  backdrop.classList.add('isHidden');
  form.reset();
  document.body.classList.remove('body-no-scroll');
}

modalCloseButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !backdrop.classList.contains('isHidden')) {
    closeModal();
  }
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  if (!form.reportValidity()) return;

  const formData = {
    name: form.name.value.trim(),
    phone: form.tel.value.trim(),
    animalId: '667ad1b8e4b01a2b3c4d5e55',
    comment: form.comment.value.trim(),
  };

  try {
    await createOrder(formData);

    console.log(formData);

    Swal.fire({
      icon: 'success',
      title: 'Успіх!',
      text: 'Ваша заявка відправлена.',
    });

    closeModal();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: error.response?.data?.message || 'Помилка при відправленні заявки',
    });
  }
});
