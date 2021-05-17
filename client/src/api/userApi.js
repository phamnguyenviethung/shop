import axiosClient from './axiosclient';

const userApi = {
  login: params => {
    const url = '/user/login';
    return axiosClient.post(url, params);
  },
  getCartData: id => {
    const url = `/cart/${id}`;
    return axiosClient.get(url);
  },

  updateCart: (id, data) => {
    const url = `/cart/update`;
    const params = {
      id,
      cart: data,
    };
    return axiosClient.post(url, params);
  },
};

export default userApi;
