<!-- src/views/CartPage.vue -->
<script setup>
import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();
</script>

<template>
  <div class="pt-32 pb-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="font-display text-4xl font-bold mb-8 text-center">
        Tu Carrito
      </h1>

      <div v-if="cart.items.length === 0" class="text-center text-gray-500">
        <p class="text-xl">Tu carrito está vacío.</p>
        <RouterLink
          to="/carta"
          class="text-amber-600 hover:underline mt-4 inline-block"
        >
          ¡Empieza a añadir productos!
        </RouterLink>
      </div>

      <div v-else class="max-w-4xl mx-auto">
        <!-- Lista de productos -->
        <div class="space-y-4">
          <div
            v-for="item in cart.items"
            :key="item.id"
            class="flex items-center bg-white p-4 rounded-lg shadow"
          >
            <img
              v-if="item.imagen"
              :src="item.imagen"
              class="w-16 h-16 object-contain mr-4 rounded"
            />
            <div class="flex-grow">
              <h2 class="font-bold">{{ item.nombre }}</h2>
              <p class="text-sm text-gray-500">{{ item.price.toFixed(2) }}€</p>
            </div>
            <div class="flex items-center gap-2">
              <button
                @click="cart.decreaseItem(item.id)"
                class="px-2 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button
                @click="cart.addItem(item)"
                class="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <div class="text-right w-24 font-semibold">
              {{ (item.price * item.quantity).toFixed(2) }}€
            </div>
            <button
              @click="cart.removeItem(item.id)"
              class="ml-4 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        </div>

        <!-- Resumen y total -->
        <div class="mt-8 pt-4 border-t">
          <div class="flex justify-between items-center text-2xl font-bold">
            <span>Total:</span>
            <span>{{ cart.totalPrice }}€</span>
          </div>
          <div class="mt-6 flex justify-end gap-4">
            <button
              @click="cart.clearCart()"
              class="text-gray-500 hover:underline"
            >
              Vaciar carrito
            </button>
            <button
              class="bg-beer-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-beer-700"
            >
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
