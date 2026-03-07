import { openModalForm } from './modal-function.js';

const refs = {
  backdrop: document.querySelector('#animal-modal-backdrop'),
  modalContent: document.querySelector('#modal-content'),
  closeBtn: document.querySelector('#modal-close'),
};

export function createModalMarkup(pet) {
  const categories =
    pet.categories?.map(cat => cat.name).join(', ') || 'Тваринка';

  return `
    <img src="${pet.image}" alt="${pet.name}" class="animal-img" />
    <div class="animal-info-wrapper"> 
        <p class="animal-species">${categories}</p>
        <h2 class="animal-name">${pet.name}</h2>
        
        <p class="animal-meta">
            <span class="meta-key">${pet.age}</span> 
            <span class="meta-key">${pet.gender}</span>
        </p>

        <ul class="animal-traits-list-2">
            <li class="trait-item">
                <h3 class="trait-title">Опис:</h3>
                <p class="trait-text">${pet.description || 'Опис скоро з’явиться'}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Здоров’я:</h3>
                <p class="trait-text">${pet.health || 'Тваринка здорова та обстежена'}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Поведінка:</h3>
                <p class="trait-text">${pet.behavior || 'Спокійна та дружелюбна'}</p>
            </li>
        </ul>
        
        <button type="button" class="btn-adopt" data-animal-id="${pet._id || ''}"" >Взяти додому</button>
    </div>
  `;
}

//  Відкриває модальне вікно

export function openModal(pet) {
  if (!refs.backdrop || !refs.modalContent) return;

  refs.modalContent.innerHTML = createModalMarkup(pet);
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open'); // Блокуємо скрол фону

  const btnOpenForm = refs.modalContent.querySelector('.btn-adopt');
  if (btnOpenForm) {
    btnOpenForm.addEventListener('click', () => {
      const animalId = btnOpenForm.dataset.animalId;
      openModalForm(animalId);
      closeModal();
    });
  }

  window.addEventListener('keydown', onEscPress);
}

//  Закриває модальне вікно

export function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  window.removeEventListener('keydown', onEscPress);
}

// Обробник клавіші Escape
function onEscPress(e) {
  if (e.code === 'Escape') closeModal();
}

// Слухачі подій для закриття
refs.closeBtn?.addEventListener('click', closeModal);

refs.backdrop?.addEventListener('click', e => {
  if (e.target === refs.backdrop) closeModal();
});
