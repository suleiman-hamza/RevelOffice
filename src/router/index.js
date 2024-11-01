import { createWebHistory, createRouter } from 'vue-router'

import Testroute from '@/Views/Testroute.vue';

const routes = [
  { path: '/test', component: Testroute },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;