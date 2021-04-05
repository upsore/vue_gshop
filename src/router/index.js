import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/Msite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'

// const MSite = () => import('../pages/Msite/MSite')
// const Search = () => import('../pages/Search/Search')
// const Order = () => import('../pages/Order/Order.vue')
// const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'

import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'


Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    component: MSite,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/order',
    component: Order,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/Profile',
    component: Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/search',
    component: Search,
    meta:{
      showFooter:true
    }
  },
  
  {
    path: '/',
    redirect: '/msite',
    // meta:{
    //   showFooter:true
    // }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children:[
      {
        path:'',
        redirect:'/shop/goods'
      },
      {
      path:'/shop/goods',
      component:ShopGoods
    },
    {
      path:'/shop/ratings',
      component:ShopRatings
    },
    {
      path:'/shop/info',
      component:ShopInfo
    },
  ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
