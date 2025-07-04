import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// Importamos los estilos globales que crearemos en el siguiente paso
import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia); // Le decimos a Vue que use el router

app.mount("#app");
