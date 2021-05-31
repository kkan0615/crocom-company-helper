import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { Role } from '@/interfaces/model/Role'
import { Position } from '@/interfaces/model/Postion'
import { Department } from '@/interfaces/model/Department'
import { CustomDate } from '@/interfaces/system/date'

export type UserStatusType = 'service' | 'retiree'

export interface User extends SequelizeAttributes {
  empNo: string
  name: string
  color: string
  nickname: string
  img: string
  status: UserStatusType
  positionId: number
  departmentId: number
  entryDate: CustomDate
}

export interface UserInfo extends User {
  roles: Array<Role>
  Position: Position
  Department: Department
}

export interface UserForm extends User {
  password: number
  confirmPassword: number
}
