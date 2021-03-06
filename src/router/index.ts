import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Register from '../views/Register.vue'
import UserPage from '../views/UserPage.vue'

Vue.use(VueRouter)

async function beforeEnter(to: Route, from: Route, next: NavigationGuardNext<Vue>) {
  if (localStorage.getItem('access-token')) next()
  else next({ name: 'signin' })
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    // beforeEnter,
    component: UserPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
