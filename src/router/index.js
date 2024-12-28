import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Main from '../views/Main.vue';
import Playground from '../views/Playground.vue';
import Welcome from '../views/Welcome.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/2021',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/playground',
        name: 'Playground',
        component: Playground
      },
    ]
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '*',
    redirect: '/2021'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
