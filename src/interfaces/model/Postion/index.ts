import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { User } from '@/interfaces/model/User'

export interface Position extends SequelizeAttributes {
  name: string
  order: number
}

export interface PositionInfo extends Position {
  Users: Array<User>
}
