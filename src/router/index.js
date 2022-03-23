// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Cart from '../views/cart/Cart'
import Profile from '../views/profile/Profile'

Vue.use(VueRouter)

const routes = [
  {
    // 路由默认路径
    path: '',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  // {
  //   path: '/about',
  //   component: About
  // },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router