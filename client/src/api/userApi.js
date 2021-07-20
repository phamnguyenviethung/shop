import axiosClient from './axiosclient';

const userApi = {
  getUserInfo: uid => {
    const url = `/user/${uid}`;
    return axiosClient.get(url);
  },
  updateuserInfo: (uid, data) => {
     const url = `/user/${uid}`;
     return axiosClient.patch(url,data);
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
