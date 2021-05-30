import { MutationTree } from 'vuex'
import { AdminViewState } from './state'
import { UserInfo } from '@/interfaces/model/User'
import { PositionInfo } from '@/interfaces/model/Postion'

export enum AdminViewMutationTypes {
  SET_USERS = 'ADMIN_VIEW_SET_USERS',
  SET_POSITIONS = 'ADMIN_VIEW_SET_POSITIONS',
}

export type AdminViewMutations<S = AdminViewState> = {
  [AdminViewMutationTypes.SET_USERS](state: S, payload: Array<UserInfo>): void
  [AdminViewMutationTypes.SET_POSITIONS](state: S, payload: Array<PositionInfo>): void
}

export const adminViewMutations: MutationTree<AdminViewState> & AdminViewMutations = {
  [AdminViewMutationTypes.SET_USERS] (state, payload) {
    state.users = payload
  },
  [AdminViewMutationTypes.SET_POSITIONS] (state, payload) {
    state.positions = payload
  },
}
