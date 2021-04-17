import axiosClient from './axiosclient';

const productApi = {
  getAll: params => {
    const url = '/products/list';
    return axiosClient.get(url);
  },
  addNew: params => {
    const url = '/products/add';
    return axiosClient.post(url, params);
  },
  update: params => {
    const url = '/products/edit';
    return axiosClient.put(url, params);
  },
  delete: id => {
    const url = `/products/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
