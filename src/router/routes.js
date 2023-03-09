const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'month', component: () => import('pages/month/index.vue') },
      { path: 'year', component: () => import('pages/year/index.vue') },
      { path: 'download', component: () => import('pages/download/index.vue') },
      { path: 'clearcache', component: () => import ('pages/clearcache/index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
