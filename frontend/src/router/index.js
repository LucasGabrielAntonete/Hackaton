import { createRouter, createWebHistory } from 'vue-router'
import ProdutoView from '../views/ProdutoView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:  [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: isAuthenticated, // Aplica a guarda de rota
    },
  {
    path: "/produtos/:id",
    name: "produtos",
    component: ProdutoView,
    beforeEnter: isAuthenticated, // Aplica a guarda de rota
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  }

  ]
})

export function isAuthenticated(to, from, next) {
  const token = localStorage.getItem('token');
  if (token) {
    next(); // Continua para a próxima rotaco
    console.log("a")
  } else {
    next('/login'); // Redireciona para a página de login
    console.log("b")
  }
}

export default router
