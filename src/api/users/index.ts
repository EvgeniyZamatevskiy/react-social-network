import { instance } from 'api/config'
import { CommonResponseType } from 'api/types'
import { EMPTY_STRING } from 'constants/base'
import { UsersResponseType } from './types'

export const USERS = {
  getUsers(term: string) {

    const currentTerm = term ? `term=${term}` : EMPTY_STRING

    return instance.get<UsersResponseType>(`users?${currentTerm}`)
  },
  follow(userId: number) {
    return instance.post<CommonResponseType>(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete<CommonResponseType>(`follow/${userId}`)
  },
}
