import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Exercise from './views/Exercise.vue'
import HealthyFoods from './views/HealthyFoods.vue'
import Friends from './views/Friends.vue'
import Profile from './views/Profile.vue'

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
      component: Exercise
    },
    {
      path: '/nutrition',
      name: 'nutrition',
      component: HealthyFoods
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})