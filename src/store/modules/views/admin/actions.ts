import { ActionContext, ActionTree } from 'vuex'
import { AdminViewMutations, AdminViewMutationTypes } from './mutations'
import { AdminViewState } from './state'
import { RootState } from '@/store'
import { UserForm, UserInfo } from '@/interfaces/model/User'
import { PositionInfo } from '@/interfaces/model/Postion'
import { selectDummyUsers } from '@/data/model/User'
import { UserAdminViewFilter } from '@/interfaces/filters/views/admins/user'

export enum AdminViewActionTypes {
  SET_USERS = 'ADMIN_VIEW_SET_USERS',
  SET_USER_LIST_FILTER = 'ADMIN_VIEW_SET_USER_LIST_FILTER',
  SET_SELECTED_USER = 'ADMIN_VIEW_SET_SELECTED_USER',
  SET_USER_FORM = 'ADMIN_VIEW_SET_USER_FORM',
  LOAD_USERS = 'ADMIN_VIEW_LOAD_USERS',
  SET_POSITIONS = 'ADMIN_VIEW_SET_POSITIONS',
}

export type AugmentedActionContext = {
  commit<K extends keyof AdminViewMutations>(
    key: K,
    payload?: Parameters<AdminViewMutations[K]>[1]
  ): ReturnType<AdminViewMutations[K]>
} & Omit<ActionContext<AdminViewState, RootState>, 'commit'>

export interface AdminViewActions {
  [AdminViewActionTypes.SET_USERS](
    { commit }: AugmentedActionContext,
    payload: Array<UserInfo>,
  ): void
  [AdminViewActionTypes.SET_USER_LIST_FILTER](
    { commit }: AugmentedActionContext,
    payload: UserAdminViewFilter,
  ): void
  [AdminViewActionTypes.SET_SELECTED_USER](
    { commit }: AugmentedActionContext,
    payload: UserInfo,
  ): void
  [AdminViewActionTypes.SET_USER_FORM](
    { commit }: AugmentedActionContext,
    payload: UserForm,
  ): void
  [AdminViewActionTypes.LOAD_USERS](
    { commit }: AugmentedActionContext,
  ): void
  [AdminViewActionTypes.SET_POSITIONS](
    { commit }: AugmentedActionContext,
    payload: Array<PositionInfo>,
  ): void
}

export const adminViewActions: ActionTree<AdminViewState, RootState> & AdminViewActions = {
  [AdminViewActionTypes.SET_USERS] ({ commit }, payload) {
    commit(AdminViewMutationTypes.SET_USERS, payload)
  },
  [AdminViewActionTypes.SET_USER_LIST_FILTER] ({ commit }, payload) {
    commit(AdminViewMutationTypes.SET_USER_LIST_FILTER, payload)
  },
  [AdminViewActionTypes.SET_SELECTED_USER] ({ commit }, payload) {
    commit(AdminViewMutationTypes.SET_SELECTED_USER, payload)
  },
  [AdminViewActionTypes.SET_USER_FORM] ({ commit }, payload) {
    commit(AdminViewMutationTypes.SET_USER_FORM, payload)
  },
  async [AdminViewActionTypes.LOAD_USERS] ({ commit }) {
    const resUsers = await selectDummyUsers()
    commit(AdminViewMutationTypes.SET_USERS, resUsers)
  },
  [AdminViewActionTypes.SET_POSITIONS] ({ commit }, payload) {
    commit(AdminViewMutationTypes.SET_POSITIONS, payload)
  },
}
