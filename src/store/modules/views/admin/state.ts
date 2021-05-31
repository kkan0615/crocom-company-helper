import { UserForm, UserInfo } from '@/interfaces/model/User'
import { PositionInfo } from '@/interfaces/model/Postion'
import { UserAdminViewFilter } from '@/interfaces/filters/views/admins/user'

export interface AdminViewState {
  users: Array<UserInfo>
  userListFilter: UserAdminViewFilter
  selectedUser: UserInfo
  userForm: UserForm
  positions: Array<PositionInfo>
}

export const adminViewState: AdminViewState = {
  users: [],
  userListFilter: {} as UserAdminViewFilter,
  selectedUser: {} as UserInfo,
  userForm: {} as UserForm,
  positions: [],
}
