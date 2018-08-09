import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



//组件
import Discover from '@/pages/discover/discover.vue'
import List from '@/pages/list/list.vue'
import Mine from '@/pages/mine/mine.vue'
import Home from '@/pages/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/home',
      alias: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
