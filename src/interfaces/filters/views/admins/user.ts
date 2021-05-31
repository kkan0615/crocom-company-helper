import { UserStatusType } from '@/interfaces/model/User'

export interface UserAdminViewFilter {
  empNo: number
  name: string
  departmentId: number
  status: UserStatusType
  orderBy: Array<string>
}
