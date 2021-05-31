import axiosClient from './axiosclient';

const searchApi = {
  search: search => {
    const text = search ? search : '?name=';

    const url = `/search${text}`;
    return axiosClient.get(url);
  },
};

export default searchApi;
