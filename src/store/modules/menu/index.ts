import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { menuState, MenuState } from '@/store/modules/menu/state'
import { applicationGetters, MenuGetters } from '@/store/modules/menu/getters'
import { menuMutations, MenuMutations } from '@/store/modules/menu/mutations'
import { MenuActions, menuActions } from '@/store/modules/menu/actions'

export type Store<S = MenuState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof MenuMutations, P extends Parameters<MenuMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<MenuMutations[K]>
} & {
  getters: {
    [K in keyof MenuGetters]: ReturnType<MenuGetters[K]>;
  }
} & {
  dispatch<K extends keyof MenuActions>(
    key: K,
    payload?: Parameters<MenuActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<MenuActions[K]>
}

export const menuModule: Module<MenuState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: menuState,
  getters: applicationGetters,
  mutations: menuMutations,
  actions: menuActions,
}
