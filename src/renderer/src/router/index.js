import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectInstallationMethod from '../views/SelectInstallationMethod.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SelectInstallationMethod',
    name: 'SelectInstallationMethod',
    component: SelectInstallationMethod
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
