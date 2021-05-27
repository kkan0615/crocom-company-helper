import { MutationTree } from 'vuex'
import { MenuState } from './state'
import { RouteRecordRaw } from 'vue-router'

export enum MenuMutationTypes {
  SET_GENERAL_ROUTES = 'MENU_SET_GENERAL_ROUTES',
  SET_ADMIN_ROUTES = 'MENU_SET_ADMIN_ROUTES',
}

export type MenuMutations<S = MenuState> = {
  [MenuMutationTypes.SET_GENERAL_ROUTES](state: S, payload: Array<RouteRecordRaw>): void
  [MenuMutationTypes.SET_ADMIN_ROUTES](state: S, payload: Array<RouteRecordRaw>): void
}

export const menuMutations: MutationTree<MenuState> & MenuMutations = {
  [MenuMutationTypes.SET_GENERAL_ROUTES] (state, payload) {
    state.generalRoutes = payload
  },
  [MenuMutationTypes.SET_ADMIN_ROUTES] (state, payload) {
    state.adminRoutes = payload
  },
}
