import axiosClient from './axiosclient';

const productApi = {
  getAll: params => {
    const url = 'http://localhost:3001/api/products';
    return axiosClient.get(url, { params });
  },
};

export default productApi;
