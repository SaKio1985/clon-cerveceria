<!-- src/App.vue -->
<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

const navigationLinks = ref([
  // Objeto 1: Inicio
  { name: "Inicio", href: "#inicio" },

  // Objeto 2: La Carta (con sus hijos dentro)
  {
    // <-- Faltaba esta llave de apertura {
    name: "La carta",
    href: "/carta", // Enlace principal
    children: [
      { name: "Barriles", href: "/carta/barriles" },
      { name: "Botellas", href: "/carta/botellas" },
      { name: "Cervezas de temporada", href: "/carta/temporada" },
      { name: "Para comer", href: "/carta/para-comer" },
    ],
  }, // <-- Y esta de cierre }

  // Objeto 3: Sobre Nosotros (cambié el nombre para que coincida con el original)
  { name: "Nosotros", href: "#nosotros" },
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
