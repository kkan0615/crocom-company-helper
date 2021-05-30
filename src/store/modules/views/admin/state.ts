import { UserInfo } from '@/interfaces/model/User'
import { PositionInfo } from '@/interfaces/model/Postion'

export interface AdminViewState {
  users: Array<UserInfo>
  positions: Array<PositionInfo>
}

export const adminViewState: AdminViewState = {
  users: [],
  positions: [],
}
