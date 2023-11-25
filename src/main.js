import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia"; //глоб хранилище
import piniaPersist from "pinia-plugin-persist"; //Persist Pinia stores
import router from "./router/router.js"; //роутинг

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);
app
  .use(router) //роутинг
  .use(pinia) //pinia
  .mount("#app");
