<script setup>
import { useCartStore } from "@/stores/cartStore"; // Usando el nombre correcto y el alias @
const store = useCartStore();
console.log("Items en el carrito:", store.totalItems);
console.log("Elementos carrito", store.items);
</script>

<template>
  <div class="pt-32 pb-24 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <h1 class="font-display text-4xl font-bold mb-8 text-center">
        Tu Carrito
      </h1>

      <!-- ESTE ES EL CONTENEDOR QUE SE MUESTRA SI EL CARRITO ESTÁ VACÍO -->
      <div
        v-if="store.totalItems === 0"
        class="text-center text-gray-500 py-12"
      >
        <p class="text-2xl">Tu carrito está vacío.</p>
        <RouterLink
          to="/carta"
          class="text-amber-600 hover:underline mt-4 inline-block font-semibold"
        >
          ¡Ver nuestra carta!
        </RouterLink>
      </div>

      <!-- ESTE ES EL CONTENEDOR QUE SE MUESTRA SI HAY PRODUCTOS -->
      <div v-else class="max-w-4xl mx-auto">
        <!-- Lista de productos -->
        <div class="space-y-4">
          <div
            v-for="item in store.items"
            :key="item.id"
            class="flex items-center bg-white p-4 rounded-lg shadow-sm"
          >
            <img
              v-if="item.imagen"
              :src="item.imagen"
              class="w-16 h-16 object-contain mr-4 rounded"
            />
            <div class="flex-grow">
              <h2 class="font-bold text-lg">{{ item.nombre }}</h2>
              <p class="text-sm text-gray-500">{{ item.precio.toFixed(2) }}€</p>
            </div>
            <div class="flex items-center gap-3 text-lg">
              <button
                @click="store.decreaseItem(item.id)"
                class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span class="w-8 text-center">{{ item.quantity }}</span>
              <button
                @click="store.addItem(item)"
                class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <div class="text-right w-24 font-bold text-xl">
              {{ (item.precio * item.quantity).toFixed(2) }}€
            </div>
            <button
              @click="store.removeItem(item.id)"
              class="ml-4 text-gray-400 hover:text-red-500 text-2xl font-light"
            >
              ×
            </button>
          </div>
        </div>

        <!-- Resumen y total -->
        <div class="mt-8 pt-6 border-t-2 border-dashed">
          <div
            class="flex justify-between items-center text-3xl font-display font-bold"
          >
            <span>Total:</span>
            <span>{{ store.totalPrice }}€</span>
          </div>
          <div class="mt-6 flex justify-end gap-4">
            <button
              @click="store.clearCart()"
              class="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-200"
            >
              Vaciar carrito
            </button>
            <button
              class="bg-beer-600 text-gray-600 py-2 px-6 rounded-lg hover:bg-beer-700 shadow-md"
            >
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
