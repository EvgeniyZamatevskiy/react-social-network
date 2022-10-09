import { UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'

export type ProfileSliceInitialStateType = {
  userProfile: Nullable<UserProfileType>
  status: string
  posts: PostType[]
  searchPostsMessage: string
}

export type PostType = {
  id: number
  like: number
  message: string
  isAuthorizedUserLiked: boolean
  time: string
}
