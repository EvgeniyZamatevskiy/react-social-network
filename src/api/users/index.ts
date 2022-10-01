import { instance } from 'api/config'
import { CommonResponseType } from 'api/types'
import { EMPTY_STRING } from 'constants/base'
import { FriendValuesType } from 'store/slices/users/types'
import { convertFriend } from 'utils'
import { UsersResponseType } from './types'

export const USERS = {
  getUsers(term: string, friend: FriendValuesType) {

    const currentTerm = term ? `&term=${term}` : EMPTY_STRING
    const currentFriend = friend !== 'All' ? `&friend=${convertFriend(friend)}` : EMPTY_STRING

    return instance.get<UsersResponseType>(`users?page=${1}&count=${10}${currentTerm}${currentFriend}`)
  },
  follow(userId: number) {
    return instance.post<CommonResponseType>(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete<CommonResponseType>(`follow/${userId}`)
  },
}
