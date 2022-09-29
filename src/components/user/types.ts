import { PhotoType } from 'api/users/types'
import { FollowedStatusType } from 'store/slices/users/types'

export type UserPropsType = {
  id: number
  followed: boolean
  name: string
  photos: PhotoType
  status: string
  followedStatus: FollowedStatusType
}
