import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import createOrder from './api';

const form = document.querySelector('form');
const modalCloseButton = document.querySelector('.modalCloseButton');

export function openModalForm() {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closeFormModal() {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;
  backdrop.classList.add('is-hidden');
  form.reset();
  document.body.classList.remove('modal-open');
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', closeFormModal);
}

document.addEventListener('click', e => {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;

  if (e.target === backdrop) {
    closeFormModal();
  }
});

document.addEventListener('keydown', e => {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;

  if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden')) {
    closeFormModal();
  }
});

if (form) {
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

      closeFormModal();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text:
          error.response?.data?.message || 'Помилка при відправленні заявки',
      });
    }
  });
}
