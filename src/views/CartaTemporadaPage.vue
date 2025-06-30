<!-- src/views/CartaTemporadaPage.vue -->

<!-- ======================= -->
<!-- === 1. SCRIPT PRIMERO === -->
<!-- ======================= -->
<script setup>
import { ref, computed } from "vue";

// Datos de la página
const paginaInfo = ref({
  titulo: "Cervezas de Temporada",
  subtitulo: "Selección especial de cervezas estacionales",
  descripcion:
    "Descubre nuestra cuidada selección, cada una con su carácter único y sabores excepcionales.",
});

// Datos de las cervezas (envueltos en ref para consistencia y futura reactividad)
const cervezasTemporada = ref([
  {
    id: 1,
    nombre: "CHOUFFE",
    descripcion:
      "Tan refrescante como una salida al aire libre, La Chouffe revela primero notas de cítricos, seguidas de una sensación agradablemente especiada. Esta cerveza dorada fue la primera en salir de los barriles de la Brasserie Chouffe en el corazón de las Ardenas belgas, hace 40 años.",
    alcohol: "8º",
    precios: { mediaPinta: "3,5€", pinta: "5,5€" },
    imagen:
      "https://lacerve.es/wp-content/uploads/2023/08/214-GRIFO-CHOUFFE-BLONDE.jpg",
    tipo: "Cerveza dorada",
    origen: "Bélgica",
    notas: ["cítricos", "especiada", "refrescante"],
    disponible: true,
  },
  {
    id: 2,
    nombre: "GUINNESS SPECIAL EXPORT",
    descripcion:
      "Encargada por el aventurero cervecero John Martin en 1944, la cerveza negra Guinness Special Export tiene un potente sabor apropiado para su cervecería belga. El 8% de alcohol le confiere un cuerpo intenso.",
    alcohol: "8º",
    precios: { mediaPinta: "3,5€", pinta: "5,5€" },
    imagen:
      "https://lacerve.es/wp-content/uploads/2023/03/Guinness-Special-Export-cerveza-logo-e1680187852408.jpg",
    tipo: "Cerveza negra",
    origen: "Irlanda/Bélgica",
    notas: ["malta", "cebada tostada", "regaliz", "caramelo", "vainilla"],
    disponible: true,
  },
  {
    id: 3,
    nombre: "GULDEN DRAAK FIRE",
    descripcion:
      "Esta cerveza es de color marrón rojizo intenso y posee un carácter de caramelo intensamente dulce, con acentos de plátano e higos secos. El fuego está en el final, donde el chile acentúa las notas de malta.",
    alcohol: "10,5%",
    precios: { mediaPinta: "3,5€", pinta: "5,5€" },
    imagen:
      "https://lacerve.es/wp-content/uploads/2025/05/Gulden_Draak_Fire_33_fles_glas_Brouwerij_van_steenberge_01-768x1024.png",
    tipo: "Cerveza especial",
    origen: "Bélgica",
    notas: ["caramelo", "plátano", "higos secos", "chile", "malta"],
    disponible: true,
    especial: "Con chile",
  },
]);

// Estado reactivo para filtros (opcional, pero buena práctica)
const filtroActivo = ref("todos");
const mostrarFiltros = ref(false);

// Propiedad computada para mostrar solo las cervezas disponibles
const cervezasDisponibles = computed(() => {
  return cervezasTemporada.value.filter((cerveza) => cerveza.disponible);
});

// Método para manejar errores de imagen
const handleImageError = (event) => {
  // Puedes tener una imagen de respaldo en tu carpeta 'public'
  event.target.src = "/placeholder-beer.jpg";
};
</script>

<!-- ======================== -->
<!-- === 2. TEMPLATE DESPUÉS === -->
<!-- ======================== -->
<template>
  <!-- CAMBIO: Añadido padding inferior (pb-24) para separar del footer -->
  <div class="pt-32 pb-24 container mx-auto px-4">
    <header class="mb-12 text-center">
      <h1 class="font-display text-5xl font-bold">{{ paginaInfo.titulo }}</h1>
      <p class="text-xl text-gray-600 mt-2">{{ paginaInfo.subtitulo }}</p>
    </header>

    <!-- Grid de cervezas -->
    <div class="space-y-8">
      <article
        v-for="cerveza in cervezasDisponibles"
        :key="cerveza.id"
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center"
      >
        <div class="md:w-1/4 flex-shrink-0 text-center relative">
          <img
            :src="cerveza.imagen"
            :alt="cerveza.nombre"
            @error="handleImageError"
            loading="lazy"
            class="mx-auto h-48 object-contain"
          />
          <div
            v-if="cerveza.especial"
            class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
          >
            {{ cerveza.especial }}
          </div>
        </div>

        <div class="md:w-3/4">
          <h2 class="font-display text-3xl font-bold text-gray-900">
            {{ cerveza.nombre }}
          </h2>
          <div class="flex items-center gap-4 text-sm font-semibold mb-3">
            <span class="bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{{
              cerveza.tipo
            }}</span>
            <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{{
              cerveza.origen
            }}</span>
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{{
              cerveza.alcohol
            }}</span>
          </div>

          <p class="text-gray-600 mb-4">{{ cerveza.descripcion }}</p>

          <div class="mb-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="nota in cerveza.notas"
                :key="nota"
                class="bg-beer-100 text-beer-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {{ nota }}
              </span>
            </div>
          </div>

          <div class="flex justify-end items-center gap-4 border-t pt-4 mt-4">
            <div class="text-center">
              <p class="text-sm text-gray-500">1/2 Pinta</p>
              <p class="text-lg font-bold text-gray-800">
                {{ cerveza.precios.mediaPinta }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-500">Pinta</p>
              <p class="text-lg font-bold text-gray-800">
                {{ cerveza.precios.pinta }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<!-- ===================== -->
<!-- === 3. STYLE AL FINAL === -->
<!-- ===================== -->
<style scoped>
/*
  BONUS: Tu diseño está genial con CSS puro, pero para mantener la consistencia
  con el resto del sitio que usa Tailwind, podrías reemplazar este CSS
  por clases de Tailwind directamente en el template.

  He rehecho el template de arriba usando clases de Tailwind para que
  se integre perfectamente con el resto de tu diseño.
  Este bloque <style> ya no sería necesario, ¡pero lo dejo por si quieres
  añadir algún estilo muy específico que Tailwind no cubra!
*/
</style>
