
import Vue from 'vue'
import App from './App'
import router from './router'
import Page from './components/common/big/page'
import store from './store'


Vue.prototype.$center=new Vue();
Vue.component('page', Page);
Vue.config.productionTip = false

Vue.prototype.$center=new Vue();

import filters  from './filters'
Vue.use(filters);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
