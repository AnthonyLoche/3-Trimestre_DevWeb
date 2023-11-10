import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PagCat from "../views/PagCat.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: PagCat
    }
  ]
})

export default router
