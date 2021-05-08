import axiosClient from './axiosclient';

const orderApi = {
  create: params => {
    const url = '/order/create';
    return axiosClient.post(url, params);
  },
};

export default orderApi;
