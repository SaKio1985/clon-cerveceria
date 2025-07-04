<!-- src/views/CartaParaComerPage.vue -->
<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";

// 1. Nueva estructura de datos: un array de CATEGORÍAS.
// Cada categoría tiene un título y una lista de platos.
const cart = useCartStore();
const menuCompleto = ref([
  {
    titulo: "Especialidades",
    platos: [
      {
        id: "esp1",
        nombre: "Salchichas Alemanas asadas",
        descripcion: "(con chucrut o patatas)",
        precio: 10.5,
      },
      {
        id: "esp2",
        nombre: "Codillo asado (20min)",
        descripcion: "(con chucrut o patatas)",
        precio: 14.0,
      },
      {
        id: "esp3",
        nombre: "Oldies Cow Burger",
        descripcion:
          "250g. carne de vacuno mayor, queso Gouda, tomate fresco, cebolla caramelizada, brotes tiernos, patatas teja y salsa cesar.",
        precio: 10.8,
      },
      {
        id: "esp4",
        nombre: "Serrana Burger",
        descripcion:
          "Ternera, queso, jamón plancha, pepinillo agridulce, cebolla crispy, brotes tiernos, huevo, patatas teja y salsa cheddar.",
        precio: 10.0,
        badge: "novedad!",
      },
      {
        id: "esp5",
        nombre: "El Perrete",
        descripcion:
          "Salchicha frankfurt de 24cm, fundido de cuatro quesos, bacon, jalapeños y acompañado de patatas teja con salsa barbacoa.",
        precio: 9.5,
      },
      {
        id: "esp6",
        nombre: "Patatas Cheese Bacon",
        descripcion:
          "Ración de patatas fritas, con crujientes trizas de bacon, salsa de queso y gratinadas con una mezcla de cuatro quesos.",
        precio: 10.5,
      },
    ],
  },
  {
    titulo: "NUEVO!",
    tituloClase: "text-yellow-500 font-black", // Clase especial para este título
    platos: [
      {
        id: "cal1",
        nombre: "Calamares a la Andaluza",
        descripcion:
          "Calamares frescos, recién enharinados, fritos, acompañados de limón y salsa de alioli negro (tinta de calamar)",
        precio: 10.0,
      },
      {
        id: "lang1",
        nombre: "Langostinos al Horno",
        descripcion:
          "700g. de langostinos asados al horno, con nuestra salsa especial de ajoaceite y brandy",
        precio: 17.0,
      },
    ],
  },
  {
    titulo: "Hamburguesas",
    nota: "Las hamburguesas llevan ketchup, mostaza y van acompañadas de patatas",
    // Estructura especial para opciones con precios diferentes
    opciones: [
      { id: "ham1", nombre: "Normal", precio: 8.0 },
      { id: "ham2", nombre: "+ Queso", precio: 8.5 },
      { id: "ham3", nombre: "+ Bacon y Queso", precio: 9.0 },
      { id: "ham4", nota: "Por solo 3€ más pide tu 1/3 Kg de carne" },
    ],
  },
  {
    titulo: "Sandwiches",
    nota: "Los sandwiches van acompañados de patatas",
    opciones: [
      {
        id: "san1",
        nombre: "Vegetal",
        descripcion:
          "Brotes tiernos, tomate, Atún, pepinillo agridulce, espárragos y mahonesa",
        precio: 8.5,
      },
      { id: "san2", nombre: "Bacon queso, tomate y huevo", precio: 9.0 },
    ],
  },
  {
    titulo: "Pizzotas",
    nota: "¡¡30x40!! ¡¡1 Kg.!!",
    // Estructura para una lista de sabores bajo un mismo precio
    sabores: [
      "York queso",
      "Bacon queso",
      "4 quesos",
      "Barbacoa",
      "Farinato y cabrales",
    ],
    precio: 14.5,
  },
  {
    titulo: "Raciones",
    platos: [
      { id: "rac1", nombre: "Nuggets de pollo", precio: 8.5 },
      { id: "rac2", nombre: "Escalopines al cabrales", precio: 11.5 },
      {
        id: "rac3",
        nombre: "Alitas de pollo",
        descripcion: "(con chimichurri o picantes)",
        precio: 9.5,
      },
      { id: "rac4", nombre: "Crujientes de queso", precio: 8.5 },
      { id: "rac5", nombre: "Croquetas", precio: 8.5 },
      {
        id: "rac6",
        nombre: "Sartén de huevos rotos",
        descripcion: "a elegir: Farinato, Jamón o Bacon",
        precio: 9.5,
      },
    ],
  },
  {
    titulo: "Patatas",
    platos: [
      {
        id: "pat1",
        nombre: "Al Cabrales",
        descripcion:
          "(o cualquier salsa de estas: Brava, Yogurt, Mahonesa, Miel y mostaza, Chimichurri, Rosa, Barbacoa, Alioli, César)",
        nota: "Cuenco de salsa adicional 2.00€",
      },
      {
        id: "pat2",
        nombre: "Normales",
        // Estructura para precios múltiples (Ración / 1/2 Ración)
        precios: [
          { tipo: "Ración", valor: 8.0 },
          { tipo: "1/2 Ración", valor: 5.0 },
        ],
      },
      {
        id: "pat3",
        nombre: "Teja",
        precios: [
          { tipo: "Ración", valor: 9.5 },
          { tipo: "1/2 Ración", valor: 6.0 },
        ],
      },
    ],
  },
]);
</script>

<!-- src/views/CartaParaComerPage.vue -->
<template>
  <div class="pt-32 pb-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Bucle principal por categorías -->
      <div
        v-for="categoria in menuCompleto"
        :key="categoria.titulo"
        class="mb-12"
      >
        <h2
          class="font-display text-4xl font-bold text-center mb-4"
          :class="categoria.tituloClase || 'text-gray-900'"
        >
          {{ categoria.titulo }}
        </h2>
        <p v-if="categoria.nota" class="text-center text-gray-600 mb-8 italic">
          {{ categoria.nota }}
        </p>

        <div class="space-y-4">
          <!-- Renderizado para platos normales -->
          <div
            v-for="plato in categoria.platos"
            :key="plato.id"
            class="bg-white rounded-lg shadow p-4 flex justify-between items-center gap-4"
          >
            <div>
              <h3
                class="font-bold text-lg text-beer-800 flex items-center gap-2"
              >
                {{ plato.nombre }}
                <span
                  v-if="plato.badge"
                  class="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full"
                  >{{ plato.badge }}</span
                >
              </h3>
              <p v-if="plato.descripcion" class="text-sm text-gray-500 italic">
                {{ plato.descripcion }}
              </p>
              <div v-if="plato.precios" class="flex gap-6 mt-2">
                <div v-for="precio in plato.precios" :key="precio.tipo">
                  <span class="text-sm text-gray-500">{{ precio.tipo }}</span>
                  <p class="font-bold text-lg">
                    {{ precio.valor.toFixed(2) }}€
                  </p>
                </div>
              </div>
              <p v-if="plato.nota" class="text-xs text-red-600 mt-1">
                {{ plato.nota }}
              </p>
            </div>
            <div class="flex items-center gap-4 flex-shrink-0">
              <p v-if="plato.precio" class="font-bold text-xl text-gray-800">
                {{ plato.precio.toFixed(2) }}€
              </p>
              <!-- CAMBIO: Botón para añadir platos normales -->
              <button
                v-if="plato.precio"
                @click="cart.addItem(plato)"
                class="bg-amber-500 text-white rounded-full p-2 hover:bg-amber-600 transition"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Renderizado para opciones (Hamburguesas, Sandwiches) -->
          <div
            v-if="categoria.opciones"
            class="bg-white rounded-lg shadow p-4 space-y-2"
          >
            <div
              v-for="opcion in categoria.opciones"
              :key="opcion.id"
              class="flex justify-between items-center"
            >
              <p v-if="opcion.nombre" class="text-lg">
                <span class="font-bold">{{ opcion.nombre }}</span>
                <span
                  v-if="opcion.descripcion"
                  class="text-sm text-gray-500 italic"
                >
                  - {{ opcion.descripcion }}</span
                >
              </p>
              <p
                v-if="opcion.nota"
                class="w-full text-center font-semibold text-amber-700"
              >
                {{ opcion.nota }}
              </p>
              <div
                v-if="opcion.precio"
                class="flex items-center gap-4 flex-shrink-0"
              >
                <p class="font-bold text-xl">{{ opcion.precio.toFixed(2) }}€</p>
                <!-- CAMBIO: Botón para añadir opciones -->
                <button
                  @click="cart.addItem(opcion)"
                  class="bg-amber-500 text-white rounded-full p-2 hover:bg-amber-600 transition"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Renderizado para lista de sabores (Pizzotas) -->
          <div
            v-if="categoria.sabores"
            class="bg-white rounded-lg shadow p-4 flex justify-between items-center"
          >
            <ul class="list-disc list-inside text-lg space-y-1">
              <li v-for="sabor in categoria.sabores" :key="sabor">
                {{ sabor }}
              </li>
            </ul>
            <div class="flex items-center gap-4 flex-shrink-0">
              <p class="font-bold text-2xl">
                {{ categoria.precio.toFixed(2) }}€
              </p>
              <!-- CAMBIO: Botón para añadir la Pizzota (un solo item) -->
              <button
                @click="
                  cart.addItem({
                    id: 'pizzota',
                    nombre: `Pizzota (${categoria.sabores.join(', ')})`,
                    price: categoria.precio,
                  })
                "
                class="bg-amber-500 text-white rounded-full p-2 hover:bg-amber-600 transition"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
