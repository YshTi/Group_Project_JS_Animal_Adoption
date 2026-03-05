import axios from 'axios';

export default async function createOrder(data) {
  const response = await axios.post(
    'https://paw-hut.b.goit.study/api/orders',
    data
  );

  return response.data;
}
