<!-- src/views/HomePage.vue -->

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// --- DATOS PARA LA SECCIÓN "NUESTRA HISTORIA" ---
// IMPORTANTE: Asegúrate de tener estas imágenes en 'src/assets/images/'
// Si la carpeta no existe, créala.
import aboutImage1 from "@/assets/images/about-1.avif";
import aboutImage2 from "@/assets/images/about-2.avif";
import aboutImage3 from "@/assets/images/about-3.avif";

const router = useRouter();
const historyItems = ref([
  {
    text: "El 14 de Marzo del 1996 abrimos las puertas de la Cevecería Gilber's, desde entonces hemos trabajado con innumerables marcas de cerveza, consiguiendo ofrecer a nuestros clientes un alto nivel de calidad y satisfacción.",
    image: aboutImage1,
  },
  {
    text: "Han pasado muchos años y hoy por hoy podemos estar orgullosos de ser una de las mejores cervecerías de Salamanca y casi seguro la mas antigua de la ciudad....",
    image: aboutImage2,
  },
  {
    text: "Ofrecemos un ambiente agradable y de trato familiar con una amplia carta a base de sandwiches, hamburguesas de ternera, raciones, especialidades....",
    image: aboutImage3,
  },
]);

// --- DATOS PARA LA SECCIÓN "CARTA" ---
const menuItems = ref([
  {
    name: "Hamburguesas",
    description:
      "Jugosas hamburguesas de ternera preparadas con ingredientes frescos y acompañadas de patatas.",
    icon: "fas fa-hamburger", // Esto se reemplazará por un SVG o imagen
  },
  {
    name: "Sandwiches",
    description:
      "Una amplia variedad de sandwiches gourmet para todos los gustos y preferencias.",
    icon: "fas fa-bread-slice", // Esto se reemplazará por un SVG o imagen
  },
  {
    name: "Raciones",
    description:
      "Deliciosas raciones tradicionales perfectas para compartir entre amigos.",
    icon: "fas fa-utensils", // Esto se reemplazará por un SVG o imagen
  },
  {
    name: "Cervezas",
    description:
      "Más de 50 variedades de cerveza nacional e internacional, siempre bien fría.",
    icon: "fas fa-beer", // Esto se reemplazará por un SVG o imagen
  },
]);

// --- LÓGICA DE SCROLL ---
const verCarta = () => {
  router.push("/carta/temporada");
};

const encontrar = () => {
  // Primero navega a la página y luego el navegador se encargará del ancla
  router.push("/sobre-nosotros#mapa");
};
</script>

<template>
  <div>
    <!-- ======================= -->
    <!-- === HERO SECTION === -->
    <!-- ======================= -->
    <section
      id="inicio"
      class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900"
    >
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h1 class="font-display font-bold text-white leading-tight">
            <span class="block text-4xl md:text-5xl font-light mb-2"
              >Bienvenidos a</span
            >
            <span
              class="text-6xl md:text-8xl text-transparent bg-clip-text beer-gradient"
            >
              La Cerve
            </span>
          </h1>

          <p
            class="text-xl md:text-2xl text-gray-300 mt-8 mb-10 font-light leading-relaxed"
          >
            La cervecería más antigua de Salamanca. Desde 1996 ofreciendo la
            mejor experiencia cervecera con un ambiente familiar y una cocina
            excepcional.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="verCarta"
              class="beer-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Ver Nuestra Carta
            </button>
            <button
              @click="encontrar"
              class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Encuéntranos
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================= -->
    <!-- === ABOUT SECTION (NUESTRA HISTORIA) === -->
    <!-- ======================= -->
    <section id="nosotros" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- Header de Sección -->
        <div class="text-center mb-16">
          <h2
            class="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nuestra Historia
          </h2>
          <div class="w-24 h-1 beer-gradient mx-auto rounded-full"></div>
        </div>

        <!-- Contenedor para los items de la historia -->
        <div class="space-y-16">
          <div
            v-for="(item, index) in historyItems"
            :key="index"
            class="flex flex-col lg:flex-row items-center gap-x-12"
          >
            <!-- Texto -->
            <div class="lg:w-1/2" :class="{ 'lg:order-last': index % 2 !== 0 }">
              <p class="text-lg text-gray-700 leading-relaxed">
                {{ item.text }}
              </p>
            </div>

            <!-- Imagen -->
            <div class="lg:w-1/2 mt-8 lg:mt-0">
              <img
                :src="item.image"
                alt="Interior de la cervecería"
                class="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================= -->
    <!-- === MENU PREVIEW SECTION === -->
    <!-- ======================= -->
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
          <div
            v-for="item in menuItems"
            :key="item.name"
            class="bg-white rounded-2xl p-6 card-hover shadow-lg"
          >
            <div
              class="w-16 h-16 beer-gradient rounded-full flex items-center justify-center mb-4 mx-auto"
            >
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

    <!-- Aquí iría la sección de Contacto si la tuvieras -->
  </div>
</template>
