import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { adminViewState, AdminViewState } from '@/store/modules/views/admin/state'
import { adminViewGetters, AdminViewGetters } from '@/store/modules/views/admin/getters'
import { adminViewMutations, AdminViewMutations } from '@/store/modules/views/admin/mutations'
import { AdminViewActions, adminViewActions } from '@/store/modules/views/admin/actions'

export type Store<S = AdminViewState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof AdminViewMutations, P extends Parameters<AdminViewMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<AdminViewMutations[K]>
} & {
  getters: {
    [K in keyof AdminViewGetters]: ReturnType<AdminViewGetters[K]>;
  }
} & {
  dispatch<K extends keyof AdminViewActions>(
    key: K,
    payload?: Parameters<AdminViewActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AdminViewActions[K]>
}

export const adminViewModule: Module<AdminViewState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: adminViewState,
  getters: adminViewGetters,
  mutations: adminViewMutations,
  actions: adminViewActions,
}
