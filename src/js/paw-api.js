import axios from 'axios';
axios.defaults.baseURL = 'https://paw-hut.b.goit.study/api';
export async function getCategories() {
  try {
    const response = await axios.get('/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function searchPets(categoryId, page, limit) {
  let parametrs = categoryId ? { page, limit, categoryId } : { page, limit };
  try {
    const response = await axios.get('/animals', {
      params: parametrs,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
