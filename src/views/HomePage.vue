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

// --- IMPORTAR IMÁGENES DE PLATOS ---
import elPerreteImg from "@/assets/images/platos/el-perrete.avif";
import calamaresImg from "@/assets/images/platos/calamares.avif";
import pizzotasImg from "@/assets/images/platos/pizzotas.avif";
import burgerImg from "@/assets/images/platos/burger.avif";

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
    name: "El Perrete",
    description:
      "Salchicha frankfurt de 24cm, fundido de cuatro quesos, bacon, jalapeños y acompañado de patatas teja con salsa barbacoa.",
    price: "9.50€",
    image: elPerreteImg,
  },
  {
    name: "Calamares a la Andaluza",
    description:
      "Calamares frescos, recién enharinados, fritos, acompañados de limón y salsa de alioli negro (tinta de calamar).",
    price: "10.00€",
    image: calamaresImg,
  },
  {
    name: "Pizzotas",
    description:
      "30x40!! 1 Kg!! York queso, Bacon queso, 4 quesos, Barbacoa, Farinato y cabrales.",
    price: "14.50€",
    image: pizzotasImg,
  },
  {
    name: "My Little Burger",
    description:
      "Nuestra pequeña hamburguesa de 7 Kg. (aprox) para 8 a 12 personas por 90€ con patatas (por encargo, mín. 24h).",
    price: "90€",
    image: burgerImg,
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

// --- LÓGICA PARA ZOOM DE IMÁGENES ---
const selectedImage = ref(null);
const showModal = ref(false);

const openImageModal = (item) => {
  selectedImage.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = null;
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
            <span class="text-6xl md:text-8xl lg:text-9xl gilbert-logo">
              Gilbert's
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
            Nuestras Especialidades
          </h2>
          <div class="w-24 h-1 beer-gradient mx-auto rounded-full mt-6"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div
            v-for="item in menuItems"
            :key="item.name"
            class="bg-white rounded-2xl overflow-hidden card-hover shadow-lg group"
          >
            <!-- Imagen del plato -->
            <div
              class="relative h-48 overflow-hidden cursor-pointer"
              @click="openImageModal(item)"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-bold text-sm"
              >
                {{ item.price }}
              </div>
              <!-- Icono de zoom -->
              <div
                class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
              >
                <div
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2"
                >
                  <svg
                    class="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Contenido del plato -->
            <div class="p-6">
              <h3
                class="font-display text-xl font-bold text-gray-900 mb-3 text-center"
              >
                {{ item.name }}
              </h3>
              <p class="text-gray-600 text-center leading-relaxed text-sm">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Botón para ver más -->
        <div class="text-center mt-12">
          <button
            @click="verCarta"
            class="beer-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Ver Carta Completa
          </button>
        </div>
      </div>
    </section>

    <!-- Aquí iría la sección de Contacto si la tuvieras -->

    <!-- ======================= -->
    <!-- === MODAL PARA ZOOM DE IMÁGENES === -->
    <!-- ======================= -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div class="relative max-w-4xl max-h-full" @click.stop>
        <!-- Botón cerrar -->
        <button
          @click="closeModal"
          class="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Imagen ampliada -->
        <img
          v-if="selectedImage"
          :src="selectedImage.image"
          :alt="selectedImage.name"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        <!-- Información del plato -->
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg"
        >
          <h3 class="text-white text-2xl font-bold mb-2">
            {{ selectedImage?.name }}
          </h3>
          <p class="text-gray-200 text-sm mb-2">
            {{ selectedImage?.description }}
          </p>
          <span
            class="inline-block bg-amber-500 text-white px-3 py-1 rounded-full font-bold"
          >
            {{ selectedImage?.price }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Importar fuente Google Fonts para Gilbert's */
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap");

.gilbert-logo {
  font-family: "Cinzel", serif !important;
  font-weight: 700;
  color: #8b4513;
  text-shadow:
    2px 2px 0px #654321,
    4px 4px 0px #4a2c17,
    6px 6px 8px rgba(0, 0, 0, 0.3),
    0px 0px 20px rgba(218, 165, 32, 0.5);
  letter-spacing: 2px;
  position: relative;
}

.gilbert-logo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(218, 165, 32, 0.1) 0%,
    rgba(255, 215, 0, 0.2) 25%,
    rgba(184, 134, 11, 0.1) 50%,
    rgba(218, 165, 32, 0.2) 75%,
    rgba(255, 215, 0, 0.1) 100%
  );
  border-radius: 10px;
  z-index: -1;
}

/* Efecto de hover para las cartas */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Gradiente para cerveza */
.beer-gradient {
  background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%);
}

/* Animación para el modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
