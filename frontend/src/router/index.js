import { createRouter, createWebHistory } from 'vue-router'

import FullLayout from '@/layout/FullLayout.vue'
import BlankLayout from '@/layout/BlankLayout.vue'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import PoliticaDevolucao from '../views/PoliticaDevolucao.vue'
import ProdutoView from '../views/ProdutoView.vue'

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
          name: 'Home',
          beforeEnter: isAuthenticated
        },
        {
          path: '/quem-somos',
          name: 'about',
          component: AboutView,
          beforeEnter: isAuthenticated
        },
        {
          path: '/como-devolver',
          name: 'PoliticaDevolucao',
          component: PoliticaDevolucao,
          beforeEnter: isAuthenticated
        },
        {
          path: '/produto/:id',
          name: 'ProdutoView',
          component: ProdutoView,
          beforeEnter: isAuthenticated
        },
        {
          path: '/noivas',
          name: 'NoivasView',
          component: () => import('../views/NoivasView.vue')
        },
        {
          path: '/registro',
          name: 'RegistroView',
          component: () => import('../views/RegistroView.vue')
        },
        {
          path: '/carrinho',
          name: 'CarrinhoView',
          component: () => import('../views/CarrinhoView.vue')
        }
      ]
    },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: '/login',
          name: 'loginView',
          component: LoginView
        }
      ]
    }
  ]
})

export function isAuthenticated(to, from, next) {
  const token = localStorage.getItem('token')
  if (token) {
    next() // Continua para a próxima rotaco
    console.log('a')
  } else {
    next('/login') // Redireciona para a página de login
    console.log('b')
  }
}

export default router
