const SaveData = {
  path: '/savedata',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('pages/SaveDataPage/SaveData.vue'),
      meta: { requiresAuth: false, roles: [] },
    }
  ]
}

const TransferData = {
  path: '/transferdata',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('pages/TransferDataPage/TransferData.vue'),
      meta: { requiresAuth: false, roles: [] },
    }
  ]
}

const ManageData = {
  path: '/managedata',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('pages/ManageDataPage/ManageData.vue'),
      meta: { requiresAuth: false, roles: [] },
    }
  ]
}


const ManageRole = {
  path: '/managerole',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('pages/ManageRolePage/ManageRole.vue'),
      meta: { requiresAuth: false, roles: [] },
    }
  ]
}


const ResultTransfer = {
  path: '/resulttransfer',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('pages/ResultTransferPage/ResultTransfer.vue'),
      meta: { requiresAuth: false, roles: [] },
    }
  ]
}

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
  {...ManageData},
  {...ManageRole},
  {...ResultTransfer},
  {...SaveData},
  {...TransferData},
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
