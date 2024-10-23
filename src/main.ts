import "./assets/main.css";
import "./assets/custom.css";
import api from "./services/api";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n.ts";

const app = createApp(App);
app.config.globalProperties.$axios = api;

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
