import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Orders from '@/components/Orders'
import Products from '@/components/Products'

import { routerInfo } from '@/common/vars'

Vue.use(Router)

const routes = [
  {
    path: routerInfo.home.path,
    name: routerInfo.home.name,
    component: Home
  },
  {
    path: routerInfo.orders.path,
    name: routerInfo.orders.name,
    component: Orders
  },
  {
    path: routerInfo.products.path,
    name: routerInfo.products.name,
    component: Products
  }
]

const router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: '',
  linkExactActiveClass: 'active'
})

export default router
