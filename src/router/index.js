// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomePage },
    // Añadimos las nuevas rutas para "La carta"
    {
      path: "/carta",
      name: "carta",
      // Creamos un componente para la página principal de la carta
      component: () => import("../views/CartaPage.vue"),
    },
    // Aquí irían las rutas específicas si las necesitas
    // { path: '/carta/barriles', ... },
  ],
});
export default router;
