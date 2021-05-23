import { GetterTree } from 'vuex'
import { MenuState } from './state'
import { RootState } from '@/store'

export type MenuGetters<S = MenuState> = {
}

export const applicationGetters: GetterTree<MenuState, RootState> & MenuGetters = {

}
