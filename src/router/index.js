import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from 'comps/Layouts';
import notFound from 'comps/404';

Vue.use(VueRouter);
const routerList = ['Home', 'About'];

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: Layout,
    children: [],
  },
  { path: '*', name: 'notFound', component: notFound },
];

routerList.forEach((item) => {
  const one = {
    path: `/${item.toLowerCase()}`,
    name: item,
    // eslint-disable-next-line prefer-template
    component: () => import(/* webpackChunkName: "viewPage" */ '../views/' + item + '.vue'),
  };
  routes[1].children.push(one);
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
