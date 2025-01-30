import { createRouter, createWebHistory } from 'vue-router';
import AdminLayouts from './components/AdminLayouts/Layout.vue';

const routes = [
  {
    name: "404NotFound",
    component: () => import("@/admin/404page.vue"),
    path: "/:slug/:slug",
    meta: {
      title: "404NotFound",
      requiresAuth: false,
      requiresSubscription: false,
    },
  },
 
  {
    path: "/",
    component: AdminLayouts,
    children: [
      {
        name: "AdminDashboard",
        component: () => import("./admin/AdminDashboard.vue"),
        path: "/",
        meta: {
          title: "AdminDashboard",
          requiresAuth: true,
        },
      },
    ],
  },
  
];

const router = createRouter({
  history:createWebHistory(),
//   history:createWebHistory('/admin/'),
  routes,
});

// Add a beforeEach navigation guard
router.beforeEach((to, from, next) => {
   
      next();

});

export default router;