
import Vue from 'vue'
import App from './App'
import router from './router'
import Page from './components/common/big/page'

Vue.prototype.$center=new Vue();
Vue.component('page', Page);
Vue.config.productionTip = false

import filters  from './filters'
Vue.use(filters);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
