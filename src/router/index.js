import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Playground from '../views/Playground.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playground',
    name: 'Playground',
    component: Playground
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
