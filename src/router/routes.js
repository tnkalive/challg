const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'),
        meta: { requiresAuth: true, roles: [] }
    },
  ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/authentication",
    component: () => import("layouts/AuthenticationLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("pages/authentication/LoginPage.vue"),
        meta: { requiresAuth: false, roles: [] },
      },
      {
        path: "logout",
        component: () => import("pages/authentication/LogoutPage.vue"),
        meta: { requiresAuth: false, roles: [] },
      },
      {
        path: "callback",
        component: () => import("pages/authentication/CallbackPage.vue"),
        meta: { requiresAuth: false, roles: [] },
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
