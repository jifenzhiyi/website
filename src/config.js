export const NODE_ENV = process.env.NODE_ENV || 'dev';

export const API_LIST = {
  dev: 'https://api.cc.metwell.net/v1.0.0/', // 测试地址
  prod: `${window.location.origin}/v1.0.0/`,
};

export const END_POINT = API_LIST[NODE_ENV];
