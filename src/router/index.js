// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";

// 1. Definimos las rutas usando alias y lazy loading para mejor rendimiento.
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/carta",
    name: "carta",
    component: () => import("@/views/CartaPage.vue"),
  },
  {
    path: "/carta/barriles",
    name: "carta-barriles",
    component: () => import("@/views/CartaBarrilesPage.vue"),
  },
  {
    path: "/carta/botellas",
    name: "carta-botellas",
    component: () => import("@/views/CartaBotellasPage.vue"),
  },
  {
    path: "/carta/temporada",
    name: "carta-temporada",
    component: () => import("@/views/CartaTemporadaPage.vue"),
  },
  {
    path: "/carta/para-comer",
    name: "carta-para-comer",
    component: () => import("@/views/CartaParaComerPage.vue"),
  },
  {
    path: "/sobre-nosotros",
    name: "sobre-nosotros",
    component: () => import("@/views/SobreNosotros.vue"),
  },
  {
    path: "/carrito",
    name: "carrito",
    component: () => import("@/views/CarritoPage.vue"),
  },
];

// 2. Aquí estaba el error principal: faltaba crear la instancia del router.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // Usamos el array de rutas que definimos arriba
});

// 3. Exportamos la instancia del router para que la use main.js
export default router;
