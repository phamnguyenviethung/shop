import axiosClient from './axiosclient';

const userApi = {
  login: params => {
    const url = '/user/login';
    return axiosClient.post(url, params);
  },

  register: params => {
    const url = '/user/register';
    return axiosClient.post(url, params);
  },
  refreshTokens: params => {
    const url = '/user/refresh';
    return axiosClient.post(url, params);
  },

  getCartData: id => {
    const url = `/cart/${id}?fields=cart`;
    return axiosClient.get(url);
  },

  updateCart: (id, data) => {
    const url = `/cart/${id}`;
    const params = {
      productList: data,
    };
    return axiosClient.patch(url, params);
  },

  getOrderByID: uid => {
    const url = `/order/user/${uid}`;
    return axiosClient.get(url);
  },
};

export default userApi;
