import Vue from 'vue';
import axios from 'axios';
import i18n from '@/locale';
import { END_POINT } from '@/config';
import { Modal } from 'ant-design-vue';
import storage from '@/utils/storage';

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

function modelInfo(ajaxError) {
  const lang = storage.get('wms_lang');
  console.log('modelInfo ajaxError', ajaxError, 'lang', lang);
  // TODO 增加非中文的错误提示
  if (lang === 'ja') {
    // 日文版的时候
    if (ajaxError.code === '0029') ajaxError.msg = i18n.t('tips.delete_error1');
    if (ajaxError.code === '0030') ajaxError.msg = i18n.t('tips.delete_error2');
  }
  Modal.error({
    title: '错误信息',
    content: ajaxError.msg,
    onOk() {
      if (['0002', '0006', '0007', '0017'].includes(ajaxError.code)) {
        storage.clear();
        lang && storage.set('wms_lang', lang);
        window.location.href = '/login';
      }
      setTimeout(() => {
        storage.remove('ajax_error');
      }, 1000);
    },
  });
}

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
    if (url !== '/api/users/login') {
      newConfig.method === 'GET'
        ? newConfig.params.accessToken = storage.get('wms_user_token')
        : newConfig.data.accessToken = storage.get('wms_user_token');
      newConfig.method === 'GET'
        ? newConfig.params.warehouseId = storage.get('wms_warehouse_id')
        : newConfig.data.warehouseId = storage.get('wms_warehouse_id');
      newConfig.method === 'GET'
        ? newConfig.params.pageUrl = storage.get('wms_ajax_config')
        : newConfig.data.pageUrl = storage.get('wms_ajax_config');
      newConfig.method === 'GET'
        ? newConfig.data = null
        : newConfig.params = null;
    }
    params && params.isBlob && (newConfig.responseType = 'blob');
    const ajaxError = storage.get('ajax_error');
    if (ajaxError) {
      console.log('ajaxError', ajaxError);
      // modelInfo(ajaxError);
      // return false;
    }
    // params && params.isLoading && this.startLoading();
    return this.client.request(newConfig)
      .then((res) => {
        // params && params.isLoading && this.stopLoading();
        if (res.data && res.status !== 200) {
          Modal.error({ title: res.status, content: res.data.message });
          return null;
        }
        if (params && params.isBlob) {
          return res.data;
        }
        if (res.data && res.data.code !== '0000') {
          storage.set('ajax_error', res.data);
          modelInfo(res.data);
          return null;
        }
        return res.data;
      });
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

// 9999 系统异常
// 0001 请求参数错误
// 0002 您还没有登录！请登录。
// 0003 账号不存在
// 0004 密码输入错误，请重新输出
// 0005 原密码输入错误，请重新输出
// 0006 您的账号在异地登录，请重新登录
// 0007 您的账号异常，请重新登录
// 0008 该角色已分配给其他用户，请先解除关联关系
// 0009 账号已存在
// 0010 仓库编号已存在
// 0011 角色名称已存在
// 0012 授权失败
// 0013 请选择小于七天的数据！
// 0014 请选择小于三十一天的数据！
// 0015 请选择小于三天的数据！
// 0016 产品已存在！
// 0017 登录过期，请重新登录！
// 0018 表数据内容错误
