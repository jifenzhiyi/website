import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from 'comps/Layouts';
import notFound from 'comps/404';

Vue.use(VueRouter);
// 首页 关于我们 发展历程 项目介绍 新闻动态 加盟优势 加盟入口 其它
const routerList = ['Home', 'About', 'History', 'Project', 'News', 'Join', 'Entrance', 'Other'];

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/news/:id',
        name: 'news',
        component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue'),
      },
    ],
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const main = document.getElementById('main');
  main && (main.scrollTop = 0);
  next();
});

export default router;
