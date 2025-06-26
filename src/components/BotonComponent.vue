<script setup>
import { computed } from "vue";

// Las props de icono se han eliminado. El componente ya no se preocupa
// de dónde viene el icono, solo de si se le proporciona uno.
const props = defineProps({
  text: String,
  href: String,
  target: String,
});

const isLink = computed(() => !!props.href);
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : null"
    :target="isLink ? target : null"
    :rel="isLink && target === '_blank' ? 'noopener noreferrer' : null"
    class="custom-button"
  >
    <!-- 
      Usamos un slot para el icono.
      El `v-if="$slots.icon"` comprueba si el componente padre ha
      proporcionado contenido para el slot "icon".
      Si es así, renderiza el contenedor y el slot.
    -->
    <span v-if="$slots.icon" class="icon-wrapper">
      <slot name="icon"></slot>
    </span>

    <!-- El texto sigue funcionando igual -->
    <span v-if="text">{{ text }}</span>
  </component>
</template>

<style scoped>
.custom-button {
  padding: 8px 15px;
  border: 1px solid #ccc;
  background-color: #eee;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s; /* Pequeña transición para el hover */
}

.custom-button:hover {
  background-color: #c49f3b;
}

/* 
  Este contenedor asegura que el icono (sea lo que sea) 
  tenga el espaciado correcto.
*/
.icon-wrapper {
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
}

/* Si no hay texto, el icono no necesita margen a la derecha */
.icon-wrapper:only-child {
  margin-right: 0;
}
</style>
