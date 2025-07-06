<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useCartStore } from "@/stores/cartStore";

// --- DEFINICIÓN DE PROPS ---
defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

// --- ESTADO DEL COMPONENTE ---
const mobileMenuOpen = ref(false); // Controla el menú móvil
const scrolled = ref(false); // Controla el estilo del navbar al hacer scroll
const route = useRoute();
const cart = useCartStore();

// La lógica de la navbar inteligente que viene de 'main'
const isSolidNavbar = computed(() => {
  return scrolled.value || route.path !== "/";
});

// --- LÓGICA DE INTERACCIÓN ---
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// --- EFECTOS DE CICLO DE VIDA ---
// Cierra los menús cuando la ruta de navegación cambia

// Gestiona el efecto de scroll en el navbar
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="
      isSolidNavbar
        ? 'bg-white/90 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    "
  >
    <nav
      class="container mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between"
    >
      <!-- LOGO -->
      <RouterLink to="/">
        <img class="h-16 w-auto" src="/Logo.avif" alt="Logo La Cerve" />
      </RouterLink>

      <div class="flex items-center">
        <!-- === NAVEGACIÓN DE ESCRITORIO (AHORA MUY SIMPLE) === -->
        <div class="hidden md:flex md:items-center md:space-x-2">
          <!-- Un solo RouterLink dentro del v-for, ya no hay casos -->
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.to || item.href"
            class="font-medium px-4 py-2 rounded-md text-lg transition-colors"
            :class="
              isSolidNavbar
                ? 'text-gray-800 hover:text-amber-600'
                : 'text-white hover:text-yellow-300'
            "
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- ============================================= -->
        <!-- === INICIO DEL CÓDIGO DEL CARRITO A AÑADIR === -->
        <!-- ============================================= -->
        <div class="hidden md:flex items-center ml-6">
          <RouterLink
            to="/carrito"
            class="group -m-2 flex items-center p-2 relative"
          >
            <!-- Icono SVG de un carrito -->
            <svg
              class="h-6 w-6 flex-shrink-0 transition-colors"
              :class="
                isSolidNavbar
                  ? 'text-gray-600 hover:text-amber-600'
                  : 'text-white hover:text-yellow-300'
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H5.502c-.656 0-1.189-.585-1.119-1.243l1.263-12a1.125 1.125 0 011.12-1.007h8.478c.552 0 1.028.397 1.12.923z"
              />
            </svg>
            <!-- Badge con el número de items -->
            <span
              v-if="cart.totalItems > 0"
              class="absolute -top-1 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
            >
              {{ cart.totalItems }}
            </span>
          </RouterLink>
        </div>
        <!-- ============================================= -->
        <!-- === FIN DEL CÓDIGO DEL CARRITO === -->
        <!-- ============================================= -->

        <!-- BOTÓN DE MENÚ MÓVIL -->
        <div class="md:hidden flex items-center ml-4">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md transition-colors"
            :class="
              isSolidNavbar
                ? 'text-gray-800 hover:bg-gray-200'
                : 'text-white hover:bg-white/10'
            "
          >
            <span class="sr-only">Abrir menú principal</span>
            <svg
              v-if="!mobileMenuOpen"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- PANEL DE MENÚ MÓVIL (TAMBIÉN MUY SIMPLE) -->
    <div v-if="mobileMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.to || item.href"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md text-base font-medium text-white"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Transición suave para el dropdown de escritorio */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-out;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
