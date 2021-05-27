import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GeneralLayout from '@/layouts/General/index.vue'
import DashboardRoutes from './modules/general/dashboard'
import AdminRoutes from './modules/admin'

// const generalRouters: Array<RouteRecordRaw> = []
//
// const initGeneralModules = async () => {
//   const modules = (import.meta as any).glob('./modules/general/*.ts')
//   for (const key of Object.keys(modules)) {
//     const module = (await modules[key]()).default
//     if (module.length === 1)
//       generalRouters.push(module[0])
//   }
//   console.log(generalRouters)
// }

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'GeneralLayout',
    component: GeneralLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          hidden: true,
          requiredLogin: true,
        },
      },
      {
        path: 'playground',
        name: 'Playground',
        component: () => import('@/views/Playground/index.vue'),
        meta: {
          hidden: false,
          requiredLogin: true,
          icon: 'emoji_symbols',
        },
      },
      ...DashboardRoutes,
    ]
  },
  AdminRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
