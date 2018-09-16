import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/check',
      name: 'Check',
      component: () => import('@/views/Check'),
    },
  ],
});
