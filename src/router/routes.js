import index from "@/pages/index.vue";
import login from "@/pages/login.vue";
import profile from "@/pages/profile.vue";
export const routes = [
  {
    name: "Index",
    path: "/",
    component: index,
    meta: { auth: true },
  },
  {
    name: "Login",
    path: "/login",
    component: login,
  },
  {
    name: "Profile",
    path: "/profile",
    component: profile,
    meta: { auth: true },
  },
];
