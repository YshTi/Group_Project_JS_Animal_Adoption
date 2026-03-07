import { getCategories, searchPets } from './paw-api.js';
import { messageError } from './messages.js';
import { openModal } from './animal_detail.js';

export function getPetByID(id) {
  // For modal
  return petsStore.find(p => p._id === id);
}

let petsStore = [];
let currentCategory = 'all';
let currentPage = 1;
let totalPages;
let currentItemsPerPage = getItemsPerPage();
function getItemsPerPage() {
  return window.innerWidth >= 1440 ? 9 : 8;
}
// CATEGORIES
const CATEGORIES = document.querySelector('.our-pets-categories');
CATEGORIES.addEventListener('click', changeCategory);
async function loadCategories() {
  try {
    const categories = await getCategories();
    renderCategories(categories);
  } catch (error) {
    messageError(error.status);
  }
}
function renderCategories(categories) {
  let markup = categories
    .map(
      category => `<li class="our-pets-category-item">
      <button class="category-btn" data-id="${category._id}" aria-label="${category.name}" type="button">${category.name}</button>
      </li>`
    )
    .join('');
  CATEGORIES.innerHTML =
    `<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>` + markup;
}
function changeCategory(event) {
  if (event.target.dataset.id === currentCategory) {
    return;
  }
  if (event.target.closest('button')) {
    let previousCategory = CATEGORIES.querySelector('.active');
    if (previousCategory) {
      previousCategory.classList.remove('active');
    }
    currentCategory = event.target.dataset.id;
    event.target.classList.add('active');
    loadAnimals();
  }
}

// ANIMALS
const ANIMAL_LIST = document.querySelector('.our-pets-list');
async function loadAnimals(loadMore = false) {
  hidePageButton();
  showLoader();
  if (!loadMore) {
    ANIMAL_LIST.innerHTML = '';
    currentPage = 1;
  }
  const category = currentCategory === 'all' ? '' : currentCategory;
  try {
    const result = await searchPets(category, currentPage, currentItemsPerPage);
    totalPages = Math.ceil(result.totalItems / currentItemsPerPage);
    renderAnimals(result.animals);

    checkPages(); //switches page button if necessary
    if (loadMore) {
      petsStore.push(...result.animals);
    } else {
      petsStore = result.animals;
    }
  } catch (error) {
    messageError(error.status);
  } finally {
    hideLoader();
  }
}

ANIMAL_LIST.addEventListener('click', event => {
  const btn = event.target.closest('.pets-btn');
  if (!btn) return;

  const petId = btn.dataset.id;
  const petData = getPetByID(petId);

  if (petData) {
    openModal(petData);
  }
});

function renderAnimals(animals) {
  let markup = animals
    .map(pet => {
      let petCategory = pet.categories
        .map(categ => `<li class="pets-category"><p>${categ.name}</p></li>`)
        .join('');
      return `      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${pet.image}"
          alt="${pet.species}"
        />
        <p class="pets-species">${pet.species}</p>
        <h3 class="pets-name">${pet.name}</h3>
        <ul class="pets-categories">
          ${petCategory}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${pet.age}</li>
          <li class="pets-personal-item">${pet.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${pet.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${pet._id}" aria-label="Дізнатись більше про ${pet.name}">Дізнатись більше</button>
      </li>`;
    })
    .join('');
  ANIMAL_LIST.insertAdjacentHTML('beforeend', markup);
}

// PAGINATION
const PAGE_BUTTON = document.querySelector('#pets-pagination');
PAGE_BUTTON.addEventListener('click', loadPage);

function checkPages() {
  if (totalPages && currentPage < totalPages) {
    showPageButton();
    return true;
  } else {
    hidePageButton();
    return false;
  }
}
async function loadPage() {
  if (checkPages()) {
    currentPage += 1;
    loadAnimals(true);
  }
}
function hidePageButton() {
  PAGE_BUTTON.classList.add('is-hidden');
}
function showPageButton() {
  PAGE_BUTTON.classList.remove('is-hidden');
}
// LOADER
const LOADER = document.querySelector('.loader');
function hideLoader() {
  LOADER.classList.add('is-hidden');
}
function showLoader() {
  LOADER.classList.remove('is-hidden');
}

async function initPets() {
  showLoader();
  await loadCategories();
  await loadAnimals();
}

initPets();
