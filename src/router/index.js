import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/admin/',
    name: 'Admin',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/admin.vue')
  },
  {
    path: '/main',
    name: 'Main',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/main.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
