export const NODE_ENV = process.env.NODE_ENV || 'dev';

export const API_LIST = {
  dev: 'http://xxx.xxx.xxx.xxx:xxxx/', // 测试地址
  prod: `${window.location.origin}/`,
};

export const END_POINT = API_LIST[NODE_ENV];
