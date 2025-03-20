import { createWebHistory, createRouter } from 'vue-router'

import Testroute from '@/Views/Testroute.vue';
import Homeview from '@/Views/Homeview.vue';
import CheckoutView from '@/Views/CheckoutView.vue';
import CollectionViewVue from '@/Views/CollectionView.vue';

const routes = [
  { path: '/test', component: Testroute },
  { path: '/', component: Homeview },
  { path: '/checkout', component: CheckoutView },
  { path: '/collections', component: CollectionViewVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;