import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Geral from '../components/Catalogo/Geral.vue';
import Masculino from '../components/Catalogo/Masculino.vue';
import Feminino from '../components/Catalogo/Feminino.vue';
import Infantil from "../components/Catalogo/Infantil.vue";

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
      component: Geral
    },
    {
      path: "/catalogo/masculino",
      name: "masculino",
      component: Masculino
    },
    {
      path: "/catalogo/feminino",
      name: "feminino",
      component: Feminino
    },
    {
      path: "/catalogo/infantil",
      name: "infantil",
      component: Infantil
    }
  ]
})

export default router
