import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/home-page.vue'
import BigShots from '@/views/big-shots-page.vue'
import Blogroll from '@/views/blogroll-page.vue'
import NotFound from '@/views/not-found.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/big-shots', name: 'BigShots', component: BigShots },
  { path: '/blogroll', name: 'Blogroll', component: Blogroll },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

export default router
