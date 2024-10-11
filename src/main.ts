import "./assets/main.css";
import "./assets/custom.css";
import api from "./services/api";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$axios = api;

app.use(createPinia());
app.use(router);

app.mount("#app");
