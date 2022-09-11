import { configureStore } from '@reduxjs/toolkit'
import { getParseLocalStorageData, setDataToLocalStorage } from 'services'
import appSlice from './slices/app'
import authSlice from './slices/auth'
import profileSlice from './slices/profile'
import { PostType } from './slices/profile/types'
import usersSlice from './slices/users'

export const store = configureStore({
	reducer: {
		profile: profileSlice,
		auth: authSlice,
		users: usersSlice,
		app: appSlice,
	},
	preloadedState: getParseLocalStorageData('posts', {})
})

export type StoreType = typeof store
export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

store.subscribe(() => {
	setDataToLocalStorage<{ profile: { posts: PostType[] } }>('posts', { profile: { posts: store.getState().profile.posts } })
})
