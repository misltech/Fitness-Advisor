import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exercise',
      name: 'Exercise',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/health',
      name: 'Health',
      component: () => import(/* webpackChunkName: "game" */ './views/Game.vue')
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () => import(/* webpackChunkName: "game" */ './views/Friends.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "game" */ './views/Profile.vue')
      },


  ]
})
