<script setup>
// Tu lógica para obtener el año actual. ¡Perfecto!
const currentYear = new Date().getFullYear();

// Función para el botón "Ir Arriba"
const scrollToTop = () => {
  window.scrollTo({
    top: 0, // Vuelve al inicio de la página
    behavior: "smooth", // Con una animación suave
  });
};
</script>

<template>
  <!-- Usamos la estructura de diseño con Tailwind CSS que teníamos -->
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <!-- Sección principal del footer con 3 columnas -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
      ></div>

      <!-- Barra inferior con Copyright y botón "Ir Arriba" -->
      <div
        class="border-t border-gray-700 mt-8 pt-8 flex items-center justify-between"
      >
        <p class="text-sm text-gray-500">
          <!-- Aquí usamos tu texto y el año dinámico -->
          © {{ currentYear }} Cervecería Gilber's |
          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-yellow-300 transition-colors"
          >
            Funciona con Vue.js
          </a>
        </p>

        <!-- Tu botón "Ir Arriba" ahora con funcionalidad -->
        <button
          @click="scrollToTop"
          class="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
        >
          Ir Arriba
          <svg
            class="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Podemos mantener los estilos scoped vacíos, ya que Tailwind CSS
   y las clases globales manejan todo el diseño. Es una buena
   práctica dejarlo por si necesitas añadir algo específico después. */
</style>
