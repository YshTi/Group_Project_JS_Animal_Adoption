import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import createOrder from './api';

const modalCloseButton = document.querySelector('.modalCloseButton');

export function openModalForm(animalId) {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;

  const form = backdrop.querySelector('form');
  if (!form) return;

  form.dataset.animalId = animalId;

  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');

  form.addEventListener(
    'submit',
    async e => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const formData = {
        name: form.name.value.trim(),
        phone: form.tel.value.trim(),
        animalId: form.dataset.animalId,
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
    },
    { once: true }
  );
}

function closeFormModal() {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;

  const form = backdrop.querySelector('form');
  if (form) form.reset();

  backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', closeFormModal);
}

document.addEventListener('click', e => {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;
  if (e.target === backdrop) closeFormModal();
});

document.addEventListener('keydown', e => {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;
  if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden'))
    closeFormModal();
});
