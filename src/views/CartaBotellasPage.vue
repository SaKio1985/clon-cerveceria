<!-- src/views/CartaBotellasPage.vue -->
<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();

// 1. Ponemos los datos directamente aquí, dentro de una 'ref' de Vue.
const botellas = ref([
  {
    id: 1,
    nombre: "Cubanisto",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/cubanisto-cerveza-con-sabor-a-ron-e1648016901436-167x300.jpg",
    descripcion:
      "Es una cerveza Premium, que se identifica por su toque dulce acentuado debido al aroma del azúcar de caña caramelizado y melaza, incluyendo la pequeña cantidad de ron (0,17%) que entra de manera discreta en el paladar dejando rastro.",
    alcohol: "5,9%",
    volumen: "33cl",
    precio: 3,
    categoria: "premium",
    tipo: "especial",
  },
  {
    id: 2,
    nombre: "Corona",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/75032715-239x500-1-143x300.jpg",
    descripcion:
      "Maltas de bajo tueste para aportar un color ligero, notas dulces y matices de cereal. Su selección de lúpulos se manifiesta en un amargor ligero y en unas sutiles notas aromáticas. Este ingrediente aligera la cerveza y le añade frescura. Utiliza una cepa lager, de baja fermentación.",
    alcohol: "4,6%",
    volumen: "33cl",
    precio: 3,
    categoria: "lager",
    tipo: "tradicional",
  },
  {
    id: 3,
    nombre: "Desperados",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/desperados-33cl-e1648019212872-130x300.jpg",
    descripcion:
      "Es la primera cerveza del mundo que tiene un toque de Tequila. Una combinación de cerveza rubia refrescante y ligera con un puntito picante y cítrico para conseguir la mezcla perfecta.",
    alcohol: "5,9%",
    volumen: "33cl",
    precio: 3,
    categoria: "premium",
    tipo: "especial",
  },
  {
    id: 4,
    nombre: "Nómada Naturpils",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/8414-1-e1648018194351-116x300.jpg",
    descripcion:
      "Descubre Naturepils, la visión de una pils tradicional adaptada, fabricada con ingredientes orgánicos con una sola clase de malta y un solo lúpulo, con una sencilla receta que gracias al macerado en decocciones permite obtener un sabor pleno, con aroma a pan horneado y a notas florales. Esta cerveza, de amargo suave y delicado, bien balanceada con el sabor dulce de la cebada te sorprenderá con su textura ligera.",
    alcohol: "4,6%",
    volumen: "33cl",
    precio: 4,
    categoria: "artesanal",
    tipo: "pils",
  },
  {
    id: 5,
    nombre: "Clausthaler",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/Diseno-sin-titulo1-1-200x300.png",
    descripcion:
      "La primera cerveza sin alcohol del mundo elaborada siguiendo la tradición de la Ley Alemana de la Pureza de la Cerveza de 1516. Con un exclusivo método patentado por la marca, que no extrae el alcohol una vez elaborada la cerveza, sino que impide que se produzca el alcohol en su elaboración. Apariencia dorada, clara y pálida con una cabeza espumosa. Ligeramente amarga.",
    alcohol: "0,35%",
    volumen: "33cl",
    precio: 3,
    categoria: "sin_alcohol",
    tipo: "sin_alcohol",
  },
  {
    id: 6,
    nombre: "Clausthaler Lemon",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/2600052-600x600-1-e1648019313651-140x300.jpg",
    descripcion:
      "Cerveza sin alcohol y baja en calorías: sólo 33 kcal. por 100 ml. Tiene cerca de un 60% menos calorías que cualquier bebida similar elaborada con la mezcla de limón y cerveza. Contiene un 60% de limonada y un 40% de Clausthaler Classic, de carácter inconfundible y especial. No sólo para el verano: para cualquier ocasión.",
    alcohol: "0,17%",
    volumen: "33cl",
    precio: 3,
    categoria: "sin_alcohol",
    tipo: "sin_alcohol_sabor",
  },
  {
    id: 7,
    nombre: "Franziskaner Sin",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/00118605501727____2__600x600-e1648019986706-129x300.jpg",
    descripcion:
      "Gracias a su característico y tradicional sabor afrutado y especiado, Es una gran alternativa para aquellas ocasiones en las que prefieras no consumir alcohol. Esta cerveza weissbier elaborada según la tradición bávara, con una espuma densa y blanca.",
    alcohol: "0,50%",
    volumen: "50cl",
    precio: 4,
    categoria: "sin_alcohol",
    tipo: "weissbier",
  },
  {
    id: 8,
    nombre: "Free Damm Tostada",
    imagen:
      "https://lacerve.es/wp-content/uploads/2022/03/captura-de-pantalla-2020-02-05-a-las-13-47-47-e1648020398346-130x300.png",
    descripcion:
      "Cerveza de color ámbar con reflejos rojizos, brillante y de crema compacta. En nariz es muy expresiva, destacan los aromas tostados, café, cacao y una agradable sensación de caramelo. En boca se muestra amplia, con peso y rica en notas tostadas. Un paladar que combina dulzura y un toque herbal que equilibra aportando frescor.",
    alcohol: "0,0%",
    volumen: "33cl",
    precio: 3,
    categoria: "sin_alcohol",
    tipo: "tostada",
  },
  {
    id: 9,
    nombre: "Bitburger 0,0",
    imagen:
      "https://lacerve.es/wp-content/uploads/2023/02/Bitburger_Drive_033-l-Flasche_01-2021-78x300.png",
    descripcion:
      "Cerveza importada Bitburger Drive 0,0 sin alcohol. Producida bajo la ley de pureza alemana. De cuerpo bajo, color dorado intenso, espuma blanca y alta al servirse pero que se disipa rápidamente. Una bebida sin alcohol perfectamente equilibrada y refrescante.",
    alcohol: "0,0%",
    volumen: "33cl",
    precio: 3, // No se especifica precio en la página
    categoria: "sin_alcohol",
    tipo: "alemana",
  },
]);
</script>

<template>
  <div class="pt-32 pb-24 container mx-auto px-4">
    <header class="mb-12 text-center">
      <h1 class="font-display text-5xl font-bold">Cervezas de Botella</h1>
    </header>

    <!-- Contenedor principal de las tarjetas -->
    <div class="space-y-8">
      <!-- Bucle v-for para crear una tarjeta por cada cerveza -->
      <div
        v-for="botella in botellas"
        :key="botella.id"
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center"
      >
        <!-- Columna de la Imagen -->
        <div class="md:w-1/4 flex-shrink-0 text-center">
          <img
            :src="botella.imagen"
            :alt="`Logo de ${botella.nombre}`"
            class="mx-auto h-48 object-contain"
          />
        </div>

        <!-- Columna del Contenido -->
        <div class="md:w-3/4">
          <!-- Título y Subtítulo -->
          <h2 class="font-display text-3xl font-bold text-gray-900">
            {{ botella.nombre }}
          </h2>
          <p class="text-amber-700 font-semibold mb-3">
            {{ botella.alcohol }} / {{ botella.volumen }}
          </p>

          <!-- Descripción -->
          <p class="text-gray-600 mb-4">{{ botella.descripcion }}</p>

          <!-- === INICIO DEL CAMBIO: SECCIÓN DE PRECIO Y BOTÓN === -->
          <div
            v-if="botella.precio"
            class="mt-6 flex justify-between items-center border-t pt-4"
          >
            <!-- Precio -->
            <span class="text-2xl font-bold text-beer-700"
              >{{ botella.precio.toFixed(2) }}€</span
            >

            <!-- Botón de Añadir -->
            <button
              @click="
                cart.addItem({
                  id: `botella-${botella.id}`,
                  nombre: botella.nombre,
                  precio: botella.precio,
                  imagen: botella.imagen,
                })
              "
              class="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 active:bg-amber-700 transition-colors"
            >
              Añadir
            </button>
          </div>
          <!-- === FIN DEL CAMBIO === -->
        </div>
      </div>
    </div>
  </div>
</template>
