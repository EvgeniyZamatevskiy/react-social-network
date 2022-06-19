import { UserProfileResponseType } from 'api/types/profile'
import { PostsType } from 'store/reducers/profileReducer'
import { RootReducerType } from 'store/store'
import { Nullable } from 'types'

export const getPosts = (state: RootReducerType): PostsType[] => state.profile.posts
export const getUserProfile = (state: RootReducerType): Nullable<UserProfileResponseType> => state.profile.userProfile
export const getUserStatus = (state: RootReducerType): string => state.profile.userStatus