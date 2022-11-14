const routes = [
  {
    path: '',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
  {
    path: '/client/add',
    component: () => import('../Pages/AddClient.vue'),
    name: 'add-client'
  },
  {
    path: '/client/:id',
    component: () => import('../Pages/ViewClient.vue'),
    name: 'view-client'
  },
]

export default routes;
