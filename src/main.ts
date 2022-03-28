import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@vime/core/themes/default.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
