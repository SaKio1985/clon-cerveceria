<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// 1. La data ahora es una constante 'ref'
const pageTitle = ref("La carta");
const openingText = ref("ABRIMOS TODOS LOS DÍAS");

const menuSections = ref([
  {
    id: 1,
    title: "Cervezas de barril",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    route: "/carta/barriles",
  },
  {
    id: 2,
    title: "Cervezas de temporada",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    route: "/carta/temporada",
  },
  {
    id: 3,
    title: "Cervezas en botella",
    image:
      "https://images.unsplash.com/photo-1581775099013-0f98f2f016c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/carta/botellas",
  },
  {
    id: 4,
    title: "Para comer",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    route: "/carta/para-comer",
  },
]);

const router = useRouter(); // Obtenemos el router

const handleSectionClick = (section) => {
  router.push(section.route);
};
</script>

<template>
  <!-- El template se queda exactamente igual, no necesita cambios -->
  <div class="carta-view pt-32">
    <div class="container">
      <h1 class="main-title fade-in">{{ pageTitle }}</h1>
      <p class="opening-text fade-in">{{ openingText }}</p>
      <div
        v-for="(section, index) in menuSections"
        :key="section.id"
        class="menu-section fade-in"
        :style="{ animationDelay: `${index * 0.2}s` }"
        @click="handleSectionClick(section)"
      >
        <h2 class="section-title">{{ section.title }}</h2>
        <img
          :src="section.image"
          :alt="section.title"
          class="section-image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carta-view {
  background-color: #f5f1e8;
  min-height: 100vh;
  padding: 40px 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #2c2c2c;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.opening-text {
  color: #e74c3c;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 80px;
  letter-spacing: 1px;
}

.menu-section {
  margin-bottom: 100px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.menu-section:hover {
  transform: scale(1.02);
}

.menu-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #2c2c2c;
  text-align: left;
}

.section-image {
  width: 100%;
  max-width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.section-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.fade-in {
  animation: fadeIn 0.8s ease-in forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .carta-view {
    padding: 30px 0;
  }

  .container {
    padding: 0 15px;
  }

  .main-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .opening-text {
    font-size: 1rem;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 1.5rem;
    text-align: center;
  }

  .menu-section {
    margin-bottom: 60px;
  }

  .section-image {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .section-image {
    height: 200px;
  }
}
</style>
