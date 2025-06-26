<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
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
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'"
  >
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- === LOGO === -->
        <RouterLink to="/" @click="closeDropdown">
          <img
            class="h-12 w-auto"
            src="/public/Logo.avif"
            alt="Logo La Cerve"
          />
        </RouterLink>

        <!-- === NAVEGACIÓN DE ESCRITORIO === -->
        <div class="hidden md:flex md:items-center md:space-x-1">
          <div v-for="item in navItems" :key="item.name" class="relative">
            <!-- Enlace Normal -->
            <a
              v-if="!item.children"
              :href="item.href"
              class="font-medium text-white hover:text-yellow-300 px-3 py-2 rounded-md text-base"
            >
              {{ item.name }}
            </a>

            <!-- Botón del Dropdown -->
            <button
              v-else
              @click="toggleDropdown(item.name)"
              class="font-medium text-white hover:text-yellow-300 px-3 py-2 rounded-md text-base inline-flex items-center"
            >
              <span>{{ item.name }}</span>
              <svg class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Menú Desplegable (Dropdown) -->
            <transition name="dropdown">
              <div
                v-if="openDropdown === item.name"
                class="absolute -left-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-2" @click.stop>
                  <RouterLink
                    :to="item.href"
                    class="font-bold block px-4 py-3 text-base text-gray-800 hover:bg-gray-100 hover:text-amber-600"
                  >
                    Ir a {{ item.name }}
                  </RouterLink>
                  <div class="border-t border-gray-100 my-1"></div>
                  <RouterLink
                    v-for="child in item.children"
                    :key="child.name"
                    :to="child.href"
                    class="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-amber-600"
                  >
                    {{ child.name }}
                  </RouterLink>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- === BOTÓN DE MENÚ MÓVIL (HAMBURGUESA) === -->
        <div class="md:hidden flex items-center">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 hover:bg-white/10 focus:outline-none"
            aria-controls="mobile-menu"
            :aria-expanded="mobileMenuOpen"
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

    <!-- === PANEL DE MENÚ MÓVIL === -->
    <div v-if="mobileMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect">
        <!-- Para el menú móvil, mostramos todos los enlaces (padres e hijos) en una lista plana -->
        <template v-for="item in navItems" :key="item.name">
          <RouterLink
            v-if="item.children"
            :to="item.href"
            class="block px-3 py-2 rounded-md text-base font-bold text-white"
          >
            {{ item.name }}
          </RouterLink>
          <a
            v-else
            :href="item.href"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300"
          >
            {{ item.name }}
          </a>

          <template v-if="item.children">
            <RouterLink
              v-for="child in item.children"
              :key="child.name"
              :to="child.href"
              class="block pl-8 pr-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-yellow-300"
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
