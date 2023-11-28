import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";
import { testProject } from "../stores/index.js";
const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  const test = testProject();
  if (to.meta.auth && !test.IsLogin) {
    alert("Вы не авторизованы");
    return { name: "Login" };
  }
});

export default router;
