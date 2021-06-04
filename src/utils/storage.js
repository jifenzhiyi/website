const set = (key, obj) => window.localStorage.setItem(key, JSON.stringify(obj));

const remove = (key) => window.localStorage.removeItem(key);

const clear = () => window.localStorage.clear();

const get = (key) => {
  const string = window.localStorage.getItem(key);
  let jsoned;
  try {
    jsoned = window.JSON.parse(string);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('JSON.parse error', err);
  }
  return jsoned;
};

export default {
  set,
  get,
  remove,
  clear,
};
