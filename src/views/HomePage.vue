<!-- src/views/HomePage.vue -->
<script setup>
import { ref } from "vue";

// La data que antes estaba en tu script global, ahora vive aquí encapsulada.
const menuItems = ref([
  {
    name: "Hamburguesas",
    description:
      "Jugosas hamburguesas de ternera preparadas con ingredientes frescos y acompañadas de patatas.",
    icon: "fas fa-hamburger", // <-- Esto estará roto temporalmente
  },
  {
    name: "Sandwiches",
    description:
      "Una amplia variedad de sandwiches gourmet para todos los gustos y preferencias.",
    icon: "fas fa-bread-slice", // <-- Esto estará roto temporalmente
  },
  {
    name: "Raciones",
    description:
      "Deliciosas raciones tradicionales perfectas para compartir entre amigos.",
    icon: "fas fa-utensils", // <-- Esto estará roto temporalmente
  },
  {
    name: "Cervezas",
    description:
      "Más de 50 variedades de cerveza nacional e internacional, siempre bien fría.",
    icon: "fas fa-beer", // <-- Esto estará roto temporalmente
  },
]);

// La lógica para hacer scroll a una sección
const scrollToSection = (elementId) => {
  const element = document.querySelector(elementId);
  if (element) {
    // El -80 es para compensar la altura del navbar fijo
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      id="inicio"
      class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900"
    >
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h1
            class="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Bienvenidos a
            <span class="text-transparent bg-clip-text beer-gradient"
              >La Cerve</span
            >
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed"
          >
            La cervecería más antigua de Salamanca. Desde 1996 ofreciendo la
            mejor experiencia cervecera con un ambiente familiar y una cocina
            excepcional.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="scrollToSection('#carta')"
              class="beer-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Ver Nuestra Carta
            </button>
            <button
              @click="scrollToSection('#contacto')"
              class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Encuéntranos
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="nosotros" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2
              class="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Nuestra Historia
            </h2>
            <div class="w-24 h-1 beer-gradient mx-auto rounded-full"></div>
          </div>
          <!-- ... El resto del contenido de la sección "nosotros" va aquí ... -->
        </div>
      </div>
    </section>

    <!-- Menu Preview -->
    <section id="carta" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nuestra Especialidad
          </h2>
          <div class="w-24 h-1 beer-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <!-- Hacemos el bucle con los datos de nuestro script -->
          <div
            v-for="item in menuItems"
            :key="item.name"
            class="bg-white rounded-2xl p-6 card-hover shadow-lg"
          >
            <div
              class="w-16 h-16 beer-gradient rounded-full flex items-center justify-center mb-4 mx-auto"
            >
              <!-- OJO: Esto no se verá, porque ya no usamos Font Awesome -->
              <i :class="item.icon" class="text-white text-2xl"></i>
            </div>
            <h3
              class="font-display text-xl font-bold text-gray-900 mb-3 text-center"
            >
              {{ item.name }}
            </h3>
            <p class="text-gray-600 text-center leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
