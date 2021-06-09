import Vue from 'vue';
import axios from 'axios';
import { END_POINT } from '@/config';

// 请求拦截
const defaultRequestInterceptors = (config) => config;
// 响应拦截
const defaultResponseInterceptors = (response) => response;
// 请求开始
// const defaultStartLoading = () => {
//   console.log('请求开始');
// };
// 请求结束
// const defaultStopLoading = () => {
//   console.log('请求结束...');
// };

class Request {
  constructor(options = {}) {
    this.config = {
      baseURL: options.baseURL,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: {},
      data: {},
      timeout: 10000, // 单位毫秒
    };
    if (options.headers) {
      this.config = {
        ...this.config,
        headers: {
          ...this.config.headers,
          ...options.headers,
        },
      };
    }
    this.client = axios.create(this.config);
    Vue.prototype.$http = this.client;
    const requestInterceptors = options.requestInterceptors || defaultRequestInterceptors;
    const responseInterceptors = options.responseInterceptors || defaultResponseInterceptors;
    // this.startLoading = defaultStartLoading;
    // this.stopLoading = defaultStopLoading;
    this.client.interceptors.request.use(requestInterceptors, (error) => error);
    this.client.interceptors.response.use(responseInterceptors, (error) => responseInterceptors(error.response));
  }

  // 核心请求方法
  send(url, options, params) {
    let newConfig = { ...this.config };
    newConfig = Object.assign(newConfig, options);
    newConfig.url = url;
    params && params.isBlob && (newConfig.responseType = 'blob');
    // params && params.isLoading && this.startLoading();
    return this.client.request(newConfig).then((res) => res.data);
  }
}

const responseInterceptors = (response) => {
  if (!response) {
    // TODO 系统正在更新，请稍后访问
    return null;
  }
  const { status } = response;
  if (status !== 200) {
    let message = '';
    switch (status) {
      case 0: message = '没有网络'; break;
      case 400: message = '用户名或密码错误'; break;
      case 401: message = '没有访问该页面的权限'; break;
      case 404: message = '接口请求不存在'; break;
      case 502: message = '系统正在更新，请稍后访问'; break;
      default: message = `未知错误 ${status}--请联系上级管理员`;
    }
    return { data: { code: status, message }, status };
  }
  return response;
};

const request = new Request({
  baseURL: END_POINT,
  responseInterceptors,
});

export default request;
