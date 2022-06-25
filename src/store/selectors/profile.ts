import { UserProfileType } from 'api/types'
import { PostsType } from 'store/profileReducer'
import { RootReducerType } from 'store/store'
import { Nullable } from 'types'

export const selectPosts = (state: RootReducerType): PostsType[] => state.profile.posts
export const selectUserProfile = (state: RootReducerType): Nullable<UserProfileType> => state.profile.userProfile
export const selectUserStatus = (state: RootReducerType): string => state.profile.userStatus
