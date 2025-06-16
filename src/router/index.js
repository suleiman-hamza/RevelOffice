import { createWebHistory, createRouter } from 'vue-router'

import Testroute from '@/Views/Testroute.vue';
import Homeview from '@/Views/Homeview.vue';
import CheckoutView from '@/Views/CheckoutView.vue';
import CollectionViewVue from '@/Views/CollectionView.vue';
import User from '@/components/User.vue';
import Supa from '@/Views/Supa.vue';
import AboutView from '@/Views/AboutView.vue';
// Importing the components for the routes

const routes = [
  { path: '/test', component: Testroute },
  { path: '/', component: Homeview },
  { path: '/checkout', component: CheckoutView },
  { path: '/collections', component: CollectionViewVue },
  { path: '/help', component: User},
  { path: '/supa', component: Supa },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }    
})

export default router;