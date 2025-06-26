import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Asumimos que vas a usar Vue Router

// Importamos los estilos globales que crearemos en el siguiente paso
import "./assets/main.css";

const app = createApp(App);

app.use(router); // Le decimos a Vue que use el router

app.mount("#app");
