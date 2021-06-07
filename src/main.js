import Vue from 'vue';
import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';
import App from './App.vue';
import router from './router';
import store from './store';
import storage from './utils/storage.js';
import createComp from './utils/create.js';
import config from '../package.json';
import './styles/swiper.min.css';
import './styles/main.less';
import './styles/pop.less';
import './utils/element.js';

Vue.config.productionTip = false;
Vue.prototype.$storage = storage;
Vue.use(VueAreaLinkage);
Vue.use(createComp);

console.info(`%cv${config.version} (${new Date().toLocaleString()})`, 'color: red');
Vue.config.errorHandler = (err) => {
  console.log('errorHandler', err);
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
