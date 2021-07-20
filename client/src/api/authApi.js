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
  changepasswod: data => {
    const url = '/user/auth/password';
    return axiosClient.patch(url, data);
  },
};

export default userApi;
