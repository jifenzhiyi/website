const userAgent = navigator.userAgent;

const isPC = () => {
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let type = 'pc';
  for (let v = 0; v < Agents.length; v++) {
    if (userAgent.indexOf(Agents[v]) > 0) {
      type = 'mobile';
      break;
    }
  }
  return type === 'pc';
};

const osType = () => {
  let ostype;
  if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {
    ostype = 'Android';
  } else if (userAgent.indexOf('iPhone') > -1) {
    ostype = 'iPhone';
  } else if (userAgent.indexOf('Windows Phone') > -1) {
    ostype = 'WindowsPhone';
  }
  return ostype;
};

const isWeiXin = () => (userAgent.toLowerCase().indexOf('micromessenger') !== -1);

export { isPC, osType, isWeiXin };
