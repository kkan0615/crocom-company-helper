import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { MenuMutations, MenuMutationTypes } from '@/store/modules/menu/mutations'
import { MenuState } from '@/store/modules/menu/state'
import { routes } from '@/router'
import { RouteRecordRaw } from 'vue-router'
import adminRoutes from '@/router/modules/admin'

export enum MenuActionTypes {
  LOAD_ALL_ROUTES = 'MENU_LOAD_ALL_ROUTES',
  LOAD_GENERAL_ROUTES = 'MENU_LOAD_GENERAL_ROUTES',
  LOAD_ADMIN_ROUTES = 'MENU_LOAD_ADMIN_ROUTES',
}

export type AugmentedActionContext = {
  commit<K extends keyof MenuMutations>(
    key: K,
    payload?: Parameters<MenuMutations[K]>[1]
  ): ReturnType<MenuMutations[K]>
} & Omit<ActionContext<MenuState, RootState>, 'commit'>

export interface MenuActions {
  [MenuActionTypes.LOAD_ALL_ROUTES](
    { commit, dispatch }: AugmentedActionContext,
  ): void
  [MenuActionTypes.LOAD_GENERAL_ROUTES](
    { commit }: AugmentedActionContext,
  ): void
  [MenuActionTypes.LOAD_ADMIN_ROUTES](
    { commit }: AugmentedActionContext,
  ): void
}

export const menuActions: ActionTree<MenuState, RootState> & MenuActions = {
  [MenuActionTypes.LOAD_ALL_ROUTES] ({ dispatch }) {
    /* Set general routes */
    dispatch(MenuActionTypes.LOAD_GENERAL_ROUTES)
    /* Set Admin routes */
    dispatch(MenuActionTypes.LOAD_ADMIN_ROUTES)
  },
  [MenuActionTypes.LOAD_GENERAL_ROUTES] ({ commit }) {
    /* Set general routes */
    const generalRoute = (routes.find(route => route.name === 'GeneralLayout')  || {}) as RouteRecordRaw
    commit(MenuMutationTypes.SET_GENERAL_ROUTES, generalRoute.children)
  },
  [MenuActionTypes.LOAD_ADMIN_ROUTES] ({ commit }) {
    /* Set general routes */
    commit(MenuMutationTypes.SET_ADMIN_ROUTES, adminRoutes.children)
  },
}
