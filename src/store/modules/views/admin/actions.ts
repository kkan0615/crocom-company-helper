import { ActionContext, ActionTree } from 'vuex'
import { AdminViewMutations, AdminViewMutationTypes } from './mutations'
import { AdminViewState } from './state'
import { RootState } from '@/store'
import { SnackbarOption } from '@/interfaces/system/snackbar'
import { UserInfo } from '@/interfaces/model/User'
import { PositionInfo } from '@/interfaces/model/Postion'
import { selectDummyUsers } from '@/data/model/User'

export enum AdminViewActionTypes {
  SET_USERS = 'ADMIN_VIEW_SET_USERS',
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
  async [AdminViewActionTypes.LOAD_USERS] ({ commit }) {
    const resUsers = await selectDummyUsers()
    commit(AdminViewMutationTypes.SET_USERS, resUsers)
  },
  [AdminViewActionTypes.SET_POSITIONS] ({ commit }, payload) {
    commit(AdminViewMutationTypes.SET_POSITIONS, payload)
  },
}
