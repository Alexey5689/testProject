import { createApp } from "vue";
import App from "./App.vue";
import components from "./components";
import { createPinia } from "pinia"; //глоб хранилище
import piniaPersist from "pinia-plugin-persist"; //Persist Pinia stores
import router from "./router/router.js"; //роутинг
import "./assets/style.css";
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";
import "primevue/resources/themes/lara-light-green/theme.css";

const pinia = createPinia();
pinia.use(piniaPersist); //Persist Pinia stores

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
}); //регитсрация компонентов
console.log(components);
app
  .component("Calendar", Calendar)
  .use(PrimeVue)
  .use(router) //роутинг
  .use(pinia) //pinia
  .mount("#app");
