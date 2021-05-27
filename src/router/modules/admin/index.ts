import { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layouts/Admin/index.vue'

const adminRoutes: RouteRecordRaw = {
  path: '/admin',
  name: 'AdminLayout',
  component: AdminLayout,
  meta: {
    hidden: true,
    requiredLogin: true,
    icon: 'dashboard'
  },
  redirect: { name: 'UserAdmin' },
  children: [
    {
      path: 'user',
      name: 'UserAdmin',
      component: () => import('@/views/admin/User/index.vue'),
      meta: {
        icon: 'people',
        hidden: false,
        requiredLogin: true,
      }
    },
    {
      path: 'position',
      name: 'PositionAdmin',
      component: () => import('@/views/admin/Position/index.vue'),
      meta: {
        icon: 'assignment_ind',
        hidden: false,
        requiredLogin: true,
      }
    },
  ]
}

export default adminRoutes
