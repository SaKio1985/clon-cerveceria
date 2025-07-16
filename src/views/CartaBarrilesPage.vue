<!-- src/views/CartaBarrilesPage.vue -->
<script setup>
import { ref } from "vue";

import { useCartStore } from "@/stores/cartStore";
const cart = useCartStore();

// 1. Ponemos los datos directamente aquí, dentro de una 'ref' de Vue.
const barriles = ref([
  {
    id: 1,
    nombre: "Löwenbräu",
    tipo: "Lager",
    alcohol: "5,2%",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/N_Lowenbraeu_Logo_-300x216.png",
    descripcion:
      "A pesar de ser una lager, Löwenbräu sorprende por sus ricos matices, si bien éstos no se presentan especialmente en la nariz, donde predominan las notas dulces de la malta y el amargor del lúpulo, y se nota el fluir del abundante carbónico. Su sabor, sin embargo, es mucho más complejo. Es una cerveza que podríamos calificar de intensa, ya que el dulzor inicial, muy breve, da paso a un amargor rico, largo y prolongado, con un toque ligeramente picante hacia el final, que hacen de esta cerveza un trago muy interesante, nada convencional.",
    precios: { mediaPinta: "2,2€", pinta: "3,3€" },
    caracteristicas: [
      "Notas dulces de malta",
      "Amargor del lúpulo",
      "Sabor complejo e intenso",
      "Toque ligeramente picante",
    ],
  },
  {
    id: 2,
    nombre: "Leffe Brune",
    tipo: "Cerveza de Abadía",
    alcohol: "6,5%",
    imagen: "https://lacerve.es/wp-content/uploads/2022/03/brune.jpg",
    descripcion:
      "Leffe Brune es una auténtica cerveza de abadía. Tanto su profundidad, de color marrón oscuro y sabor ligeramente dulce se pueden atribuir al uso de la malta tostada oscura, por lo que cada sorbo es tan excepcional como el último. La Leffe Brune es una cerveza de alta fermentación, de espuma beige, abundante y acuosa, de color oscuro. Su aroma es suave frutal, quizás algo tostado. El sabor es un poco plano, aunque se siente notoriamente la levadura. Buen cuerpo, deja un amargor notable. Bastante malta, aparece algo ácido de la levadura.",
    precios: { mediaPinta: "3€", pinta: "4,5€" },
    caracteristicas: [
      "Color marrón oscuro",
      "Malta tostada oscura",
      "Aroma suave frutal",
      "Alta fermentación",
      "Sabor ligeramente dulce",
    ],
  },
  {
    id: 3,
    nombre: "Spaten Premium Bock",
    tipo: "Bock Muniquesa",
    alcohol: "6,5%", // Ojo, en tu texto original ponía 7,8% y aquí 6,5%
    imagen: "https://lacerve.es/wp-content/uploads/2022/03/Spaten-300x285.png",
    descripcion:
      "Spaten tiene su origen a finales del siglo XIV. Es la fábrica más antigua de Munich. La primera cerveza de la cervecería Spaten en entrar en España, ha sido la responsable de la gran fama de esta marca en nuestro país. Cerveza bock tipo muniquesa, 6,5° de alcohol, de baja fermentación. La Spaten Premium Bock, de color plenamente dorado y con su aroma malteado, tiene un cuerpo redondo con sabor a malta dulce y ligeramente lupulizada. De este modo resulta una cerveza fácil de beber que ha creado una gran legión de fieles seguidores.",
    precios: { mediaPinta: "2,8€", pinta: "4,5€" },
    caracteristicas: [
      "Fábrica más antigua de Munich",
      "Color dorado",
      "Aroma malteado",
      "Sabor a malta dulce",
      "Baja fermentación",
    ],
  },
  {
    id: 4,
    nombre: "Hoegaarden Wit Blanche",
    tipo: "Cerveza de Trigo Belga",
    alcohol: "4,9%",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/logo-hoegaarden-300x171.jpg",
    descripcion:
      "Hoegaarden Wit Blanche es la cerveza de trigo belga por referencia. Su historia se remonta a hace casi 600 años en la aldea de Hoegaarden. Las cervezas Blanche o de trigo se elaboraban por los monjes de esta localidad desde 1445, donde empezaron a experimentar y añadir ingredientes botánicos de todo el mundo a su tradicional receta. De inspiración Witbier, durante su elaboración se adicionan otros ingredientes como el cilantro y la piel de naranja, que le aportan aromas especiados y cítricos.",
    precios: { mediaPinta: "3€", pinta: "4,5€" },
    caracteristicas: [
      "Cerveza de trigo belga",
      "Historia de 600 años",
      "Cilantro y piel de naranja",
      "Aromas especiados y cítricos",
      "Estilo Witbier",
    ],
  },
]);
</script>

<template>
  <div class="pt-32 container mx-auto px-4">
    <header class="mb-12 text-center">
      <h1 class="font-display text-5xl font-bold">Cervezas de Barril</h1>
    </header>

    <!-- Contenedor principal de las tarjetas -->
    <div class="space-y-8">
      <!-- Bucle v-for para crear una tarjeta por cada cerveza -->
      <div
        v-for="barril in barriles"
        :key="barril.id"
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center"
      >
        <!-- Columna de la Imagen -->
        <div class="md:w-1/4 flex-shrink-0 text-center">
          <img
            :src="barril.imagen"
            :alt="`Logo de ${barril.nombre}`"
            class="mx-auto h-24 object-contain"
          />
        </div>

        <!-- Columna del Contenido -->
        <div class="md:w-3/4">
          <!-- Título y Subtítulo -->
          <h2 class="font-display text-3xl font-bold text-gray-900">
            {{ barril.nombre }}
          </h2>
          <p class="text-amber-700 font-semibold mb-3">
            {{ barril.tipo }} - {{ barril.alcohol }}
          </p>

          <!-- Descripción -->
          <p class="text-gray-600 mb-4">{{ barril.descripcion }}</p>

          <!-- Características y Precios -->
          <div class="flex flex-col sm:flex-row gap-6">
            <!-- Lista de Características -->
            <div class="flex-1">
              <h4 class="font-bold mb-2">Notas de cata:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-600">
                <li
                  v-for="caracteristica in barril.caracteristicas"
                  :key="caracteristica"
                >
                  {{ caracteristica }}
                </li>
              </ul>
            </div>
            <!-- Precios y Botones de Añadir -->
            <div
              class="bg-beer-50 p-4 rounded-lg text-center flex-shrink-0 flex flex-col gap-4"
            >
              <!-- Opción MEDIA PINTA -->
              <div class="flex flex-col items-center">
                <p class="text-lg">
                  <span class="font-semibold">Media Pinta:</span>
                  {{ barril.precios.mediaPinta }}
                </p>
                <button
                  @click="
                    cart.addItem({
                      id: `${barril.id}-media`,
                      nombre: `${barril.nombre} (1/2 Pinta)`,
                      precio: parseFloat(
                        barril.precios.mediaPinta.replace(',', '.')
                      ),
                      imagen: barril.imagen,
                    })
                  "
                  class="mt-1 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors"
                >
                  Añadir
                </button>
              </div>

              <!-- Opción PINTA -->
              <div class="flex flex-col items-center">
                <p class="text-lg">
                  <span class="font-semibold">Pinta:</span>
                  {{ barril.precios.pinta }}
                </p>
                <button
                  @click="
                    cart.addItem({
                      id: `${barril.id}-pinta`,
                      nombre: `${barril.nombre} (Pinta)`,
                      precio: parseFloat(
                        barril.precios.pinta.replace(',', '.')
                      ),
                      imagen: barril.imagen,
                    })
                  "
                  class="mt-1 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors"
                >
                  Añadir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
