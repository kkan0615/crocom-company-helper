import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { Role } from '@/interfaces/model/Role'
import { Position } from '@/interfaces/model/Postion'
import { Department } from '@/interfaces/model/Department'

export type UserStatusType = 'service' | 'retiree'

export interface User extends SequelizeAttributes {
  name: string
  color: string
  nickname: string
  img: string
  status: UserStatusType
  positionId: number
  departmentId: number
}

export interface UserInfo extends User {
  roles: Array<Role>
  Position: Position
  Department: Department
}
