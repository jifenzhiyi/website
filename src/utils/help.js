let timeout = null;
export const debounce = (fn, wait) => {
  if (timeout !== null) clearTimeout(timeout);
  timeout = setTimeout(fn, wait);
};

export const getNewDate = (time) => time.replace('T', ' ');

export const convertArrayToMap = (array, key) => {
  const object = {};
  array.forEach((element) => {
    object[element[key]] = element;
  });
  return object;
};

export const promiseReject = (errorObj) => new Promise((resolve, reject) => reject(errorObj));

export const parseInt = (variable, hex = 10) => parseInt(variable, hex);

export const isEmptyObject = (object) => Object.keys(object).length === 0;

export const isEmptyArray = (array) => array.length === 0;

// 手机验证
const myreg1 = /^[1][0-9]{10}$/;
export const isPhoneAvailable = (mobile) => !myreg1.test(mobile);

// 邮箱验证
const myreg2 = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
export const isEmailAvailable = (email) => !myreg2.test(email);

export const getDateNow = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  return `${year}-${month}-${day}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

export const formatDate = (date) => {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${[year, month, day].map(formatNumber).join('-')}`;
};

export const formatTime = (date) => {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

export const getCurrentMonthLast = (date) => {
  const endDate = new Date(date); // date 是需要传递的时间如：2018-08
  const month = endDate.getMonth();
  const nextMonth = month + 1;
  const nextMonthFirstDay = new Date(endDate.getFullYear(), nextMonth, 1);
  const oneDay = 1000 * 60 * 60 * 24;
  const dateString = new Date(nextMonthFirstDay - oneDay);
  return formatDate(dateString);
};

// 深copy
export const deepCopy = (target) => {
  // 定一个变量
  let result;
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = [];
      for (let i = 0; i < target.length; i++) {
        result.push(deepCopy(target[i]));
      }
    } else if (target === null || target.constructor === RegExp) {
      result = target;
    } else {
      result = {};
      Object.keys(target).forEach((key) => {
        result[key] = deepCopy(target[key]);
      });
    }
  } else {
    result = target;
  }
  return result;
};
