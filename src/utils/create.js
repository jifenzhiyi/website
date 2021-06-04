import Vue from 'vue';
import MessageBox from 'comps/public/MessageBox';

export default {
  initNotice(params) {
    const Builder = Vue.extend(MessageBox);
    const comp = new Builder({ propsData: params });
    comp.$mount();
    document.body.appendChild(comp.$el);
    comp.remove = () => {
      document.body.removeChild(comp.$el);
      comp.$destroy();
    };
    return comp;
  },
  install(vue) {
    vue.prototype.$notice = (options) => this.initNotice(options);
    vue.prototype.$notice_error = ({ minfo, duration = null }) => this.initNotice({
      mtype: 'error', minfo, duration,
    }).show();
    vue.prototype.$notice_success = ({ minfo, duration = null, func = null }) => this.initNotice({
      mtype: 'success',
      minfo,
      duration,
      func: () => {
        func && func();
        return Promise.resolve();
      },
    }).show();
    vue.prototype.$notice_confirm = ({ minfo, func = null }) => this.initNotice({
      mtype: 'confirm',
      minfo,
      func: () => {
        func && func();
        return Promise.resolve();
      },
    }).show();
  },
};
