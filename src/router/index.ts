import { createRouter, createWebHistory } from 'vue-router'
import DiscoveryView from '@/views/Discovery.vue'
import CollectionView from '@/views/Collection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'discovery',
      component: DiscoveryView,
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionView,
    },
  ],
})

export default router
