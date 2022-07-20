import { UserProfileType } from 'api/profile/types'
import { RootStateType } from 'store'
import { PostsType } from 'store/slices/profile/types'
import { Nullable } from 'types'

export const selectPosts = (state: RootStateType): PostsType[] => state.profile.posts
export const selectUserProfile = (state: RootStateType): Nullable<UserProfileType> => state.profile.userProfile
export const selectUserStatus = (state: RootStateType): string => state.profile.userStatus
