import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Users from '../views/Users.vue'
import Loader from '@/components/main/Loader.vue'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

async function beforeEnter(to: Route, from: Route, next: NavigationGuardNext<Vue>) {
  if (localStorage.getItem('access-token')) next()
  else next({ name: 'signin' })
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/users',
    name: 'Users',
    // beforeEnter,
    component: Users
  },
  {
    path: '/loader',
    name: 'Loader',
    component: Loader
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
