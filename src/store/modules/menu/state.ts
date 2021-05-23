import { RouteRecordRaw } from 'vue-router'

export interface MenuState {
  generalRoutes: Array<RouteRecordRaw>
}

/**
 * navigator
 */
export const menuState: MenuState = {
  generalRoutes: [],
}
