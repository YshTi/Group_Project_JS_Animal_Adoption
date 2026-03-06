import { getCategories, searchPets } from './paw-api.js';
export function getPetByID(id) {
  // For modal
  return petsStore.find(p => p._id === id);
}

let petsStore = [];
let currentCategory = 'all';
let currentPage = 1;
let totalPages;
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
    console.log('Categories load error:', error);
    //   ADD ERROR MESSAGE TO USER
  }
}
function renderCategories(categories) {
  let markup = categories
    .map(
      category => `<li class="our-pets-category-item">
      <button class="category-btn" data-id="${category._id}" type="button">${category.name}</button>
      </li>`
    )
    .join('');
  CATEGORIES.innerHTML =
    `<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" type="button">
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
  const perPage = getItemsPerPage();
  try {
    const result = await searchPets(category, currentPage, perPage);
    totalPages = Math.ceil(result.totalItems / perPage);
    renderAnimals(result.animals);

    checkPages(); //switches page button if necessary
    if (loadMore) {
      petsStore.push(...result.animals);
    } else {
      petsStore = result.animals;
    }
  } catch (error) {
    console.log('error'); // ADD ERROR MESSAGE TO USER
  } finally {
    hideLoader();
  }
}

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
        <button class="pets-btn" type="button" data-id="${pet._id}">Дізнатись більше</button>
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
  PAGE_BUTTON.classList.add('IsHidden');
}
function showPageButton() {
  PAGE_BUTTON.classList.remove('IsHidden');
}
// LOADER
const LOADER = document.querySelector('.loader');
function hideLoader() {
  LOADER.classList.add('IsHidden');
}
function showLoader() {
  LOADER.classList.remove('IsHidden');
}

async function initPets() {
  showLoader();
  await loadCategories();
  await loadAnimals();
}

initPets();
