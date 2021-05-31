import { MutationTree } from 'vuex'
import { AdminViewState } from './state'
import { UserForm, UserInfo } from '@/interfaces/model/User'
import { PositionInfo } from '@/interfaces/model/Postion'
import { UserAdminViewFilter } from '@/interfaces/filters/views/admins/user'

export enum AdminViewMutationTypes {
  SET_USERS = 'ADMIN_VIEW_SET_USERS',
  SET_USER_LIST_FILTER = 'ADMIN_VIEW_SET_USER_LIST_FILTER',
  SET_SELECTED_USER = 'ADMIN_VIEW_SET_SELECTED_USER',
  SET_USER_FORM = 'ADMIN_VIEW_SET_USER_FORM',
  SET_POSITIONS = 'ADMIN_VIEW_SET_POSITIONS',
}

export type AdminViewMutations<S = AdminViewState> = {
  [AdminViewMutationTypes.SET_USERS](state: S, payload: Array<UserInfo>): void
  [AdminViewMutationTypes.SET_USER_LIST_FILTER](state: S, payload: UserAdminViewFilter): void
  [AdminViewMutationTypes.SET_SELECTED_USER](state: S, payload: UserInfo): void
  [AdminViewMutationTypes.SET_USER_FORM](state: S, payload: UserForm): void
  [AdminViewMutationTypes.SET_POSITIONS](state: S, payload: Array<PositionInfo>): void
}

export const adminViewMutations: MutationTree<AdminViewState> & AdminViewMutations = {
  [AdminViewMutationTypes.SET_USERS] (state, payload) {
    state.users = payload
  },
  [AdminViewMutationTypes.SET_USER_LIST_FILTER] (state, payload) {
    state.userListFilter = payload
  },
  [AdminViewMutationTypes.SET_SELECTED_USER] (state, payload) {
    state.selectedUser = payload
  },
  [AdminViewMutationTypes.SET_USER_FORM] (state, payload) {
    state.userForm = payload
  },
  [AdminViewMutationTypes.SET_POSITIONS] (state, payload) {
    state.positions = payload
  },
}
