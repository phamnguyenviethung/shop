import axiosClient from './axiosclient';

const productApi = {
  list: () => {
    const url = '/products/';
    return axiosClient.get(url);
  },
  getProduct: slug => {
    const url = `/products/${slug}`;
    return axiosClient.get(url);
  },
  getProps: () => {
    const url = '/products?fields=color size categories';
    return axiosClient.get(url);
  },
};

export default productApi;

