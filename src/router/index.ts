import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SortView from '../views/SortView.vue'
import AboutView from '../views/AboutView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => Promise.resolve(HomeView)
    },
    {
      path: '/about',
      name: 'about',
      component: () => Promise.resolve(AboutView)
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => Promise.resolve(SortView)
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => Promise.resolve(SignUpView)
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => Promise.resolve(SignInView)
    }
  ]
})

export default router
