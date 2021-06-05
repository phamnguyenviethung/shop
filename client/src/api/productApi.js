import axiosClient from './axiosclient';

const productApi = {
  list: () => {
    const url = '/products/list';
    return axiosClient.get(url);
  },
  getProduct: slug => {
    const url = `/products/${slug}`;
    return axiosClient.get(url);
  },
};

export default productApi;
