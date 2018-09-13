import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Money from '@/pages/money/index'
import Ious from '@/pages/ious/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    }, {
      path: '/money',
      name: 'money',
      component: Money
    }, {
      path: '/ious',
      name: 'ious',
      component: Ious
    }
  ]
})
