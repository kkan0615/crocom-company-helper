import { RouteRecordRaw } from 'vue-router'

export interface MenuState {
  generalRoutes: Array<RouteRecordRaw>
  adminRoutes: Array<RouteRecordRaw>
  dashboardRoutes: Array<RouteRecordRaw>
}

/**
 * navigator
 */
export const menuState: MenuState = {
  generalRoutes: [],
  adminRoutes: [],
  dashboardRoutes: [],
}
