import axios from 'axios';
import queryString from 'query-string';
import store from '../store';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  const token = store.getState().user.user.token;
  if (token) {
    config.headers.auth = token;
  }

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data.data.data;
    }
    return response;
  },
  error => {
    // Handle errors
    console.log(error);
    throw error;
  }
);

export default axiosClient;
