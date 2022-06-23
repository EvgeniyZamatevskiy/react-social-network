import { RootReducerType } from 'store/store'
import { PostsType } from './types/profile'

export const selectPosts = (state: RootReducerType): PostsType[] => state.profile.posts
