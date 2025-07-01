<!-- src/App.vue -->
<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const navigationLinks = ref([
  // Objeto 1: Inicio
  { name: "Inicio", to: "/" },

  // Objeto 2: La Carta (con sus hijos dentro)
  {
    name: "La carta",
    to: "/carta", // Enlace principal
    children: [
      { name: "Barriles", to: "/carta/barriles" },
      { name: "Botellas", to: "/carta/botellas" },
      { name: "Cervezas de temporada", to: "/carta/temporada" },
      { name: "Para comer", to: "/carta/para-comer" },
    ],
  },
  { name: "Nosotros", to: "/sobre-nosotros" },
]);
</script>

<!-- Tu <template> no necesita cambios -->
<template>
  <NavbarComponent :nav-items="navigationLinks" />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style scoped></style>
