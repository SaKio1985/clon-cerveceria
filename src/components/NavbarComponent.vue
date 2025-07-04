<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { RouterLink, useRoute } from "vue-router";

// --- DEFINICIÓN DE PROPS ---
defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

// --- ESTADO DEL COMPONENTE ---
const openDropdown = ref(null); // Controla el dropdown de escritorio
const mobileMenuOpen = ref(false); // Controla el menú móvil
const scrolled = ref(false); // Controla el estilo del navbar al hacer scroll

// --- LÓGICA DE INTERACCIÓN ---
const toggleDropdown = (itemName) => {
  openDropdown.value = openDropdown.value === itemName ? null : itemName;
};

const closeDropdown = () => {
  openDropdown.value = null;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// --- EFECTOS DE CICLO DE VIDA ---
// Cierra los menús cuando la ruta de navegación cambia
const route = useRoute();
watch(
  () => route.path,
  () => {
    closeDropdown();
    closeMobileMenu();
  }
);

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
const cart = useCartStore();
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="
      scrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    "
  >
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- === LOGO === -->
        <RouterLink to="/" @click="closeDropdown">
          <img class="h-12 w-auto" src="/Logo.avif" alt="Logo La Cerve" />
        </RouterLink>

        <!-- Contenedor para todos los elementos de la derecha (Nav, Carrito, Menú Móvil) -->
        <div class="flex items-center">
          <!-- === NAVEGACIÓN DE ESCRITORIO === -->
          <div class="hidden md:flex md:items-center md:space-x-1">
            <div v-for="item in navItems" :key="item.name" class="relative">
              <!-- Caso: Es un enlace de Router (tiene 'to') -->
              <RouterLink
                v-if="item.to"
                :to="item.to"
                class="font-medium px-3 py-2 rounded-md text-base transition-colors"
                :class="
                  scrolled
                    ? 'text-gray-800 hover:text-amber-600'
                    : 'text-white hover:text-yellow-300'
                "
              >
                {{ item.name }}
              </RouterLink>

              <!-- Caso: Es un enlace de ancla (tiene 'href') -->
              <a
                v-else-if="item.href"
                :href="item.href"
                class="font-medium px-3 py-2 rounded-md text-base transition-colors"
                :class="
                  scrolled
                    ? 'text-gray-800 hover:text-amber-600'
                    : 'text-white hover:text-yellow-300'
                "
              >
                {{ item.name }}
              </a>

              <!-- Caso: Es un botón de dropdown (tiene 'children') -->
              <button
                v-else-if="item.children"
                @click="toggleDropdown(item.name)"
                class="font-medium px-3 py-2 rounded-md text-base inline-flex items-center transition-colors"
                :class="
                  scrolled
                    ? 'text-gray-800 hover:text-amber-600'
                    : 'text-white hover:text-yellow-300'
                "
              >
                <span>{{ item.name }}</span>
                <svg
                  class="ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <!-- El menú desplegable en sí -->
              <transition name="dropdown">
                <div
                  v-if="openDropdown === item.name"
                  class="absolute -left-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-2" @click.stop>
                    <RouterLink
                      :to="item.to"
                      class="font-bold block px-4 py-3 text-base text-gray-800 hover:bg-gray-100 hover:text-amber-600"
                    >
                      Ir a {{ item.name }}
                    </RouterLink>
                    <div class="border-t border-gray-100 my-1"></div>
                    <RouterLink
                      v-for="child in item.children"
                      :key="child.name"
                      :to="child.to"
                      class="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-amber-600"
                    >
                      {{ child.name }}
                    </RouterLink>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <!-- === ICONO DEL CARRITO === -->
          <div class="ml-4 flow-root lg:ml-6">
            <RouterLink
              to="/carrito"
              class="group -m-2 flex items-center p-2 relative"
            >
              <svg
                class="h-6 w-6 flex-shrink-0 transition-colors"
                :class="
                  scrolled
                    ? 'text-gray-600 group-hover:text-amber-600'
                    : 'text-white group-hover:text-yellow-300'
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
              <span
                v-if="cart.totalItems > 0"
                class="absolute -top-1 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white"
              >
                {{ cart.totalItems }}
              </span>
            </RouterLink>
          </div>

          <!-- === BOTÓN DE MENÚ MÓVIL (HAMBURGUESA) === -->
          <div class="md:hidden flex items-center ml-4">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md transition-colors"
              :class="
                scrolled
                  ? 'text-gray-800 hover:bg-gray-200'
                  : 'text-white hover:bg-white/10'
              "
            >
              <span class="sr-only">Abrir menú principal</span>
              <svg
                v-if="!mobileMenuOpen"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
      </div>
    </nav>

    <!-- === PANEL DE MENÚ MÓVIL === -->
    <div v-if="mobileMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect">
        <template v-for="item in navItems" :key="item.name">
          <RouterLink
            v-if="item.to"
            :to="item.to"
            class="block px-3 py-2 rounded-md text-base font-medium text-white"
          >
            {{ item.name }}
          </RouterLink>
          <a
            v-else-if="item.href"
            :href="item.href"
            class="block px-3 py-2 rounded-md text-base font-medium text-white"
          >
            {{ item.name }}
          </a>

          <template v-if="item.children">
            <RouterLink
              v-for="child in item.children"
              :key="child.name"
              :to="child.to"
              class="block pl-8 pr-3 py-2 rounded-md text-base font-medium text-gray-200"
            >
              {{ child.name }}
            </RouterLink>
          </template>
        </template>
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
