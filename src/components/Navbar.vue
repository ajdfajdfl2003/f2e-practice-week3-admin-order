<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-brand">Shoptime</div>
      <ul class="navbar-item">
        <li v-for="item in menus"
            :key="item.name"
            class="navbar-item-content">
          <router-link :to="item.link">{{item.label}}</router-link>
        </li>
      </ul>
      <div class="navbar-user">ADMIN</div>
    </div>
  </div>
</template>

<script>
import { routerInfo } from '@/common/vars'

const menus = [
  {
    label: routerInfo.home.label,
    link: routerInfo.home.path,
    name: routerInfo.home.name
  },
  {
    label: routerInfo.orders.label,
    link: routerInfo.orders.path,
    name: routerInfo.orders.name
  },
  {
    label: routerInfo.products.label,
    link: routerInfo.products.path,
    name: routerInfo.products.name
  }
]

export default {
  name: 'Navbar',
  data () {
    return {
      currentView: '',
      menus
    }
  }
}
</script>
