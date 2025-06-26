<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="brand-info">Cerveceria Gilber's © {{ currentYear }}</div>
      <a href="#contact-section" class="boton-contacto">
        <span>Funciona con Vue</span>
      </a>
      <a href="#contact-section" class="boton-contacto">
        <span>Ir Arriba</span>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
