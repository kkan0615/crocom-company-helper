import { GetterTree } from 'vuex'
import { AdminViewState } from './state'
import { RootState } from '@/store'

export type AdminViewGetters<S = AdminViewState> = {
}

export const adminViewGetters: GetterTree<AdminViewState, RootState> & AdminViewGetters = {
}
