import { instance } from 'api/config'
import { CommonResponseType } from 'api/types'
import { EMPTY_STRING } from 'constants/base'
import { UsersResponseType } from './types'

export const USERS = {
  getUsers(term: string, friend: boolean | string) {

    const currentTerm = term ? `term=${term}` : EMPTY_STRING
    const currentFriend = typeof friend === 'boolean' ? `friend=${friend}` : EMPTY_STRING

    return instance.get<UsersResponseType>(`users?${currentTerm}${currentFriend}`)
  },
  follow(userId: number) {
    return instance.post<CommonResponseType>(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete<CommonResponseType>(`follow/${userId}`)
  },
}
