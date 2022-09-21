import { configureStore } from '@reduxjs/toolkit'
import { LocalStorageKey } from 'enums'
import { setDataToLocalStorage, getParseLocalStorageData } from 'services'
import { ThemeType } from './slices/app/types'
import appSlice from './slices/app'
import authSlice from './slices/auth'

export const store = configureStore({
	reducer: {
		app: appSlice,
		auth: authSlice,
	},
	preloadedState: getParseLocalStorageData(LocalStorageKey.THEME, {})
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

store.subscribe(() => {
	setDataToLocalStorage<{ app: { theme: ThemeType } }>(LocalStorageKey.THEME, { app: { theme: store.getState().app.theme } })
})
