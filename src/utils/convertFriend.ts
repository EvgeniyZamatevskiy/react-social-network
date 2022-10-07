import { EMPTY_STRING } from 'constants/base'
import { FriendValuesType } from 'store/slices/users/types'

export const convertFriend = (friend: FriendValuesType): boolean | string => {
  if (friend === 'Only followed') {
    return true
  }

  if (friend === 'Only unfollowed') {
    return false
  }

  return EMPTY_STRING
}
