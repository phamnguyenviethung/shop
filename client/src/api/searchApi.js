import axiosClient from './axiosclient';

const searchApi = {
  search: search => {
    const url = `/products${search}`;
    return axiosClient.get(url);
  },
};

export default searchApi;
