import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue') // set home as path '/'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue') // set home as path '/'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue') // set home as path '/'
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail.vue') // set home as path '/'
  },
  {
    path: '/editaccount',
    name: 'editaccount',
    component: () => import('../views/editaccount.vue') // set home as path '/'
  },
  {
    path: '/inflowhistory',
    name: 'inflowhistory',
    component: () => import('../views/inflowhistory.vue') // set home as path '/'
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: () => import('../views/addproduct.vue') // set home as path '/'
  },
  {
    path: '/allproduct',
    name: 'allproduct',
    component: () => import('../views/allproduct.vue') // set home as path '/'
  },
  {
    path: '/orderhistory',
    name: 'orderhistory',
    component: () => import('../views/orderhistory.vue') // set home as path '/'
  },
  {
    path: '/showproduct/:category',
    name: 'showproduct',
    component: () => import('../views/showproduct.vue') // set home as path '/'
  },
  {
    path: '/usercart',
    name: 'usercart',
    component: () => import('../views/usercart.vue') // set home as path '/'
  },
  {
    path: '/alluser',
    name: 'alluser',
    component: () => import('../views/alluser.vue') // set home as path '/'
  },
  {
    path: '/allorder',
    name: 'allorder',
    component: () => import('../views/allorder.vue') // set home as path '/'
  },
  {
    path: '/editproduct',
    name: 'editproduct',
    component: () => import('../views/editproduct.vue') // set home as path '/'
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router