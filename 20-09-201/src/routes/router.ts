import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
