import * as VueRouter from "vue-router";
// routers
// page
const Main = () => import("../views/index.vue");
// routes
const routes = [
  {
    path: "/",
    redirect: "main",
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
];

/**
 * 创建router实例
 *
 */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  // history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});
// 路由守卫
router.beforeEach((to, from, next) => {
  next();
});
export default router;
