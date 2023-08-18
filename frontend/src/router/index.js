import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import TelaLoginView from '../views/TelaLogin.vue'
import PoliticaDevView from '../views/PoliticaDev.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // },
    {
      path: '/TelaLogin',
      name: 'Tela Login',
      component: TelaLoginView
    },
    {
      path: '/PoliticaDev',
      name: 'PoliticaDev',
      component: PoliticaDevView
    }
  ]
})

export default router
