import { createRouter, createWebHistory } from "vue-router";
import { PRODUCT } from "./path";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: PRODUCT.LIST,
      name: "ProductList",
      component: () => import("../pages/Product/List"),
    },
    {
      path: "/:catchAll(.*)",
      name: "All",
      component: () => import("../pages/Product/List"),
    },
  ],
});

export default router;
