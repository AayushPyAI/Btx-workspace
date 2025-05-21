import { createRouter, createWebHistory } from 'vue-router'

import salesPage from '../components/salesEngagement/index.vue'
import HomePage from '../components/Home.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/salesEngagement', name: 'salesEngagement', component: salesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
