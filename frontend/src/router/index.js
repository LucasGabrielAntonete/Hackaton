import { createRouter, createWebHistory } from 'vue-router'
import ProdutoView from '../views/ProdutoView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:  [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  {
    path: "/produtos",
    nome: "produtos",
    component: ProdutoView,
  },
  ]
})

export default router
