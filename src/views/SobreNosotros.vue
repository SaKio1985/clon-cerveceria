<!-- src/views/SobreNosotros.vue -->
<script setup>
import { ref } from "vue";
// 1. Importamos el componente y los estilos de la librería
import VueEasyLightbox from "vue-easy-lightbox";
import "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css";

// --- Tus imágenes de la galería (sin cambios) ---
import foto1 from "@/assets/images/about-1.avif";
import foto2 from "@/assets/images/about-2.avif";
import foto3 from "@/assets/images/about-3.avif";
import foto4 from "@/assets/images/about-4.avif";
import foto5 from "@/assets/images/about-5.avif";
import foto6 from "@/assets/images/about-6.avif";

const galleryImages = ref([foto1, foto2, foto3, foto4, foto5, foto6]);

// --- 2. Lógica para controlar el Lightbox ---
const visible = ref(false); // Controla si el lightbox está visible
const index = ref(0); // Guarda el índice de la imagen que se está viendo

// Función para mostrar el lightbox al hacer clic en una imagen
const showImg = (clickedIndex) => {
  index.value = clickedIndex; // Le decimos qué imagen mostrar
  visible.value = true; // Lo hacemos visible
};

// Función para ocultar el lightbox
const handleHide = () => {
  visible.value = false;
};
</script>

<template>
  <!-- El componente Lightbox va aquí. Es invisible por defecto y no afecta al layout. -->
  <VueEasyLightbox
    :visible="visible"
    :imgs="galleryImages"
    :index="index"
    @hide="handleHide"
  ></VueEasyLightbox>

  <!-- Este es el CONTENEDOR PRINCIPAL que envuelve TODA la página -->
  <div class="bg-gray-50 text-gray-800">
    <div class="container mx-auto px-4 pt-40 md:pt-48 pb-24 md:pb-32">
      <!-- === TÍTULO DE LA SECCIÓN === -->
      <header class="text-center mb-16">
        <h1 class="font-display text-5xl md:text-6xl font-bold">
          Sobre nosotros
        </h1>
      </header>

      <!-- === MAPA DE GOOGLE === -->
      <section class="mb-20">
        <div
          class="w-full h-96 rounded-lg shadow-xl overflow-hidden flex justify-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.92013957218103!2d-5.653413719369262!3d40.97614698834324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f260470da82d9%3A0x9a48960d488cf162!2sCervecer%C3%ADa%20Gilber's!5e0!3m2!1ses!2ses!4v1751301874845!5m2!1ses!2ses"
            class="w-full max-w-4xl h-full"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <!-- === CONTENIDO PRINCIPAL (INFO + GALERÍA) === -->
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <!-- COLUMNA IZQUIERDA: CONTACTO Y HORARIO -->
        <div class="lg:col-span-1">
          <div class="relative pl-8">
            <div
              class="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-full"
            ></div>
            <div class="space-y-16">
              <div>
                <h2 class="font-display text-3xl font-bold mb-5">Contacto</h2>
                <a
                  href="mailto:edu@lacerve.es"
                  class="text-xl text-amber-700 hover:underline"
                >
                  email: edu@lacerve.es
                </a>
              </div>
              <div>
                <h2 class="font-display text-3xl font-bold mb-5">Horario</h2>
                <div class="space-y-4 text-xl">
                  <p>
                    <span class="font-semibold"
                      >De lunes a jueves y domingos:</span
                    ><br />
                    de 18:00 a 0:00
                  </p>
                  <p>
                    <span class="font-semibold">Viernes y sabados:</span><br />
                    de 18:00 a 1:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- COLUMNA DERECHA: GALERÍA DE IMÁGENES -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="(image, imageIndex) in galleryImages"
              :key="imageIndex"
              class="overflow-hidden rounded-lg shadow-md cursor-pointer"
              @click="showImg(imageIndex)"
            >
              <img
                :src="image"
                alt="Foto de la cervecería"
                class="w-full h-full object-cover aspect-square transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
