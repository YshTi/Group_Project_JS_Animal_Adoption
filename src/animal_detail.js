// Тимчасові дані для тесту
const mockPet = {
  _id: "667ad1b8e4b01a2b3c4d5e01",
  name: "Рекс",
  species: "Собака",
  age: "3 роки",
  gender: "Хлопчик",
  image: "https://ftp.goit.study/img/paw-hut/667ad1b8e4b01a2b3c4d5e01.webp",
  description: "Рекс - це чудовий представник своєї породи. Він розумний, швидко навчається і обожнює довгі прогулянки та ігри.",
  healthStatus: "Повністю здоровий, вакцинований, кастрований.",
  behavior: "Добре ставиться до людей, але потребує соціалізації з іншими собаками."
};

const refs = {
    testBtn: document.querySelector('#modal'), // Тимчасова кнопка
    
  backdrop: document.querySelector('#animal-modal-backdrop'),
  modalContent: document.querySelector('#modal-content'),
  closeBtn: document.querySelector('#modal-close'),
};

export function createModalMarkup(pet) {
  return `
        <img src="${pet.image}" alt="${pet.name}" class="animal-img" />
        <div class="animal-info-wrapper"> 
            <ul class="animal-traits-list-1">
                <li class="trait-item">
                    <p class="animal-species">${pet.species}</p>
                    <h2 class="animal-name">${pet.name}</h2>
                    <p class="animal-meta"><span class="meta-key">${pet.age}</span> <span class="meta-key">${pet.gender}</span></p>
                </li>
            </ul>
            <ul class="animal-traits-list-2">
                <li class="trait-item">
                    <h3 class="trait-title">Опис:</h3>
                    <p class="trait-text">${pet.description}</p>
                </li>
                <li class="trait-item">
                    <h3 class="trait-title">Здоров’я:</h3>
                    <p class="trait-text">${pet.healthStatus}</p>
                </li>
                <li class="trait-item">
                    <h3 class="trait-title">Поведінка:</h3>
                    <p class="trait-text">${pet.behavior}</p>
                </li>
            </ul>
            <button type="button" class="btn-adopt" id="btn-open-form">Взяти додому</button>
        </div>
  `;
}

refs.testBtn.addEventListener('click', () => {
  refs.modalContent.innerHTML = createModalMarkup(mockPet);
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', onEscPress);
});

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  window.removeEventListener('keydown', onEscPress);
}

function onEscPress(e) {
  if (e.code === 'Escape') closeModal();
}

refs.closeBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', (e) => {
  if (e.target === refs.backdrop) closeModal();
});
