import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app'
import authSlice from './slices/auth'
import profileSlice from './slices/profile'
import usersSlice from './slices/users'

export const store = configureStore({
	reducer: {
		profile: profileSlice,
		auth: authSlice,
		users: usersSlice,
		app: appSlice,
	}
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
