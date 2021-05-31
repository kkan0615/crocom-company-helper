import { UserInfo, UserStatusType } from '@/interfaces/model/User'
import faker from 'faker'
import dayjs from 'dayjs'
import color from 'color'
import { Department } from '@/interfaces/model/Department'
import { Position } from '@/interfaces/model/Postion'

export const dummyUsers: Array<UserInfo> = []

export const generateDummyUsers = () => {
  const name = faker.name.title()
  for (let i = 0; i < 30; i++) {
    dummyUsers.push({
      id: i + 1,
      empNo: `${name}i`,
      name,
      color: '',
      nickname: '',
      img: '',
      positionId: 1,
      departmentId: 1,
      createdAt: dayjs(),
      roles: [],
      Department: {} as Department,
      Position: {} as Position,
      status: 'service',
      entryDate: dayjs()
    } as UserInfo)
  }
}

export const selectDummyUsers = async (userStatusType: UserStatusType = 'service') => {
  return dummyUsers.filter(dummyUser => {
    return dummyUser.status === userStatusType
  })
}
