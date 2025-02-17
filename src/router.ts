import { createRouter, createWebHistory } from 'vue-router'
import DiscoveryView from '@/views/Discovery.vue'
import CollectionView from '@/views/Collection.vue'
import Statistics from '@/views/Statitstics.vue'

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
    {
      path: '/collection/statistics',
      name: 'statistics',
      component: Statistics,
    },
  ],
})

export default router
