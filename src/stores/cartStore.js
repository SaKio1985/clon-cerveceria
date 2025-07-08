// src/stores/cartStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]); // El estado: un array de productos

  // Getter para el número total de productos
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  // Getter para el precio total
  const totalPrice = computed(() => {
    return items.value
      .reduce((total, item) => total + item.precio * item.quantity, 0)
      .toFixed(2);
  });

  // Acción para añadir un producto
  const addItem = (product) => {
    const existingItem = items.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  };

  // Acción para quitar cantidad de un producto
  const decreaseItem = (productId) => {
    const item = items.value.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else if (item) {
      removeItem(productId);
    }
  };

  // Acción para eliminar un producto
  const removeItem = (productId) => {
    items.value = items.value.filter((item) => item.id !== productId);
  };

  // Acción para vaciar el carrito
  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
  };
});
