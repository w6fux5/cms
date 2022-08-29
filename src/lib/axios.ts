import Axios, { AxiosRequestConfig } from 'axios';

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  if (config?.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Accept = 'application/json';
  }
  return config;
};

export const axios = Axios.create({
  baseURL: '/j',
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.msg || error.message;
    // alert(message);
    console.log(message);
    return Promise.reject(error);
  }
);
