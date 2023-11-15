import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PagCat from "../views/PagCat.vue";
import Login from "../views/Login.vue";
import Contato from "../views/Contato.vue";

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
    },
    {
      path: "/login",
      name: 'login',
      component: Login
    },
    {
      path: "/contato",
      name: 'contato',
      component: Contato
    }
  ]
})

export default router
