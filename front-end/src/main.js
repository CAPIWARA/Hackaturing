import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/router';
import filters from '@/filters';

Vue.config.productionTip = false;

Vue.use(filters);

new Vue({
  el: '#app',
  store,
  router,
  render: (λ) => λ(App),
});
