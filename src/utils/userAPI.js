import axios from 'axios';

axios.defaults.baseURL = 'https://63b6f1151907f863aa077f2b.mockapi.io/';

export const getUsers = async ({ page = 1, limit = 3 } = {}) => {
  const { data } = await axios.get('users', {
    params: { page, limit },
  });
  return data;
};
