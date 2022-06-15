import { RootReducerType } from './../../store'

export const selectPosts = (state: RootReducerType) => state.profile.posts
export const selectUserProfile = (state: RootReducerType) => state.profile.userProfile
export const selectUserStatus = (state: RootReducerType) => state.profile.userStatus