import { message } from 'antd';
import axios from 'axios';
import { BaseUrl, CodeMessage, RetryCount } from './constants';

const Axios = axios;
const AxiosRequest = Axios.create({
  baseURL: BaseUrl,
  timeout: 1000 * 60,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer: function (params) {
  //
  //     return qs.stringify(params, { arrayFormat: 'repeat' });
  // }
});

AxiosRequest.interceptors.request.use(
  config => {
    // console.log('AxiosRequest.interceptors.request', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
AxiosRequest.interceptors.response.use(
  response => {
    // console.log('AxiosRequest.interceptors.response', response);
    if (response.data === '' || response.data?.code !== 200) {
      message.error(response.data.message || '请求没有响应数据');
    }
    return response.data;
  },
  error => {
    error.config.__retryCount = error.config.__retryCount || 0;
    // console.log('error', error, error.response);
    if (error.config.__retryCount >= RetryCount) {
      if (
        error.message.includes('timeout') ||
        (error.message && CodeMessage[error.message]) ||
        (error?.response &&
          error?.response?.status &&
          CodeMessage[error.response?.status])
      ) {
        message.error(
          CodeMessage[error.response?.status] ||
            CodeMessage[error.message] ||
            CodeMessage.timeout,
        );
      } else {
        message.error(error.message);
      }

      return Promise.reject(error);
    }
    error.config.__retryCount += 1;
    return AxiosRequest(error.config);
  },
);
const AxiosPost = (url: string, data?: Record<string, any>, options = {}) => {
  return AxiosRequest.post(url, data, { ...options });
};
const AxiosPostJson = (
  url: string,
  data?: Record<string, any>,
  options = { headers: { 'Content-Type': 'application/json;charset=UTF-8' } },
) => {
  return AxiosRequest.post(url, data, { ...options });
};
const AxiosPut = (url: string, data?: Record<string, any>, options = {}) => {
  return AxiosRequest.post(url, data, { ...options });
};
const AxiosPutJson = (
  url: string,
  data: any,
  options = { headers: { 'Content-Type': 'application/json;charset=UTF-8' } },
) => {
  return AxiosRequest.put(url, data, { ...options });
};
const AxiosGet = (url: string, params?: Record<string, any>, options = {}) => {
  return AxiosRequest.get(url, { params, ...options });
};
const AxiosDelete = (
  url: string,
  params?: Record<string, any>,
  options = {},
) => {
  return AxiosRequest.delete(url, { params, ...options });
};
export {
  AxiosPost,
  AxiosPostJson,
  AxiosPut,
  AxiosPutJson,
  AxiosGet,
  AxiosDelete,
};
