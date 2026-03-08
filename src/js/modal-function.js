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
  document.body.classList.add('body-no-scroll');

  form.addEventListener(
    'submit',
    async e => {
      e.preventDefault();

      if (!form.name.value.trim() || !form.tel.value.trim()) {
        form.reportValidity();
        return;
      }

      const formData = {
        name: form.name.value.trim(),
        phone: form.tel.value.trim(),
        animalId: form.dataset.animalId,
        comment: form.comment.value.trim() || 'Немає коментаря',
      };

      try {
        showFormLoader();
        await createOrder(formData);

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
      } finally {
        hideFormLoader();
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
  document.body.classList.remove('body-no-scroll');
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

const formLoader = document.querySelector('#form-backdrop .loader');

function showFormLoader() {
  formLoader.classList.remove('is-hidden');
}

function hideFormLoader() {
  formLoader.classList.add('is-hidden');
}
