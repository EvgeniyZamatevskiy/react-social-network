import { PostsType } from 'store/profileReducer'
import { RootReducerType } from 'store/store'

export const selectPosts = (state: RootReducerType): PostsType[] => state.profile.posts
