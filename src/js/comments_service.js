import axios from 'axios';

const BASE_URL = 'https://paw-hut.b.goit.study/api/feedbacks';

export async function getFeedback(page = 1) {
  const params = {
    limit: 6,
    page: page,
  };

  try {
    const response = await axios.get(BASE_URL, { params });

    return response.data;
  } catch (error) {
    console.log('Feedback error:', error);
  }
}