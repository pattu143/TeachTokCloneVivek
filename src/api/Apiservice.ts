import axios from 'axios';

const BASE_URL = 'https://cross-platform.rp.devfactory.com';

export const ApiService = {
  getFollowing: async () => {
    const response = await axios.get(`${BASE_URL}/following`);
    return response.data;
  },
  getForYou: async () => {
    const response = await axios.get(`${BASE_URL}/for_you`);
    return response.data;
  },
  revealAnswer: async (id: string) => {
    const response = await axios.get(`${BASE_URL}/reveal?id=${id}`);
    return response.data;
  },
};

