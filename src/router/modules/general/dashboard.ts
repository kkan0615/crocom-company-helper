import { RouteRecordRaw } from 'vue-router'

const channelRoutes: Array<RouteRecordRaw> = [
  {
    path: 'dashboard',
    name: 'DashboardLayout',
    component: () => import('@/layouts/modules/Dashboard/index.vue'),
    meta: {
      hidden: false,
      requiredLogin: true,
      icon: 'dashboard'
    },
    redirect: { name: 'AtWorkDashboard' },
    children: [
      {
        path: 'at-work',
        name: 'AtWorkDashboard',
        component: () => import('@/views/dashboards/AtWork/index.vue'),
        meta: {
          hidden: false,
          requiredLogin: true,
        }
      },
    ]
  },
]

export default channelRoutes
