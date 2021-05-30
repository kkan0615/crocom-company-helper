// @TODO: 밑에 주소 참고하기
// https://gist.github.com/lucaska3/ad3e2a2a62533aa590784a0eff2bef17
// https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-forked-11nz2?file=/src/store/index.ts
// store.ts
import { InjectionKey } from 'vue'
import { createLogger, createStore, Store, useStore as baseUseStore, } from 'vuex'
import { UserState } from '@/store/modules/user/state'
import { userModule, Store as UserStore } from '@/store/modules/user'
import { ApplicationState } from '@/store/modules/application/state'
import { applicationModule, Store as ApplicationStore } from '@/store/modules/application'
import { MenuState } from '@/store/modules/menu/state'
import { menuModule, Store as MenuStore } from '@/store/modules/menu'
import { AdminViewState } from '@/store/modules/views/admin/state'
import { adminViewModule, Store as AdminViewStore } from '@/store/modules/views/admin'

export interface RootState {
  user: UserState
  application: ApplicationState
  menu: MenuState
  adminView: AdminViewState
}

export type RootStore =
  UserStore<Pick<RootState, 'user'>> &
  ApplicationStore<Pick<RootState, 'application'>> &
  MenuStore<Pick<RootState, 'menu'>> &
  AdminViewStore<Pick<RootState, 'adminView'>>
// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol()
/* Plugins for store */
// @TODO: use createLogger when it's dev mode
const plugins = [createLogger({})]

export const store = createStore<RootState>({
  plugins,
  modules: {
    user: userModule,
    application: applicationModule,
    menu: menuModule,
    adminView: adminViewModule,
  },
})
export default function useStore (): RootStore {
  return baseUseStore(key) as RootStore
}
