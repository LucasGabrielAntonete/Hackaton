import { createRouter, createWebHistory } from 'vue-router'

import BlankLayout from '../layout/BlankLayout.vue'
import FullLayout from '../layout/FullLayout.vue'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import PoliticaDevolucao from '../views/PoliticaDevolucao.vue'
import PaginaDebutantesVue from '../views/PaginaDebutantesVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FullLayout,
      children: [
        {
          path: '/',
          component: HomeView,
          name: 'Home'
        },
        {
          path: '/quem-somos',
          name: 'about',
          component: AboutView
        },
        {
          path: '/como-devolver',
          name: 'PoliticaDevolucao',
          component: PoliticaDevolucao
        },
        {
          path: '/debutantes',
          name: 'debutantes',
          component: PaginaDebutantesVue
        }
      ]
    },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: '/login',
          name: 'LoginView',
          component: LoginView
        }
      ]
    }
  ]
})

export default router
