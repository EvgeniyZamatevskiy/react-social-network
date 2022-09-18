import { configureStore } from '@reduxjs/toolkit'
import { LocalStorageKey } from 'enums'
import { setDataToLocalStorage, getParseLocalStorageData } from 'services'
import appSlice from './slices/app'
import { ThemeType } from './slices/app/types'

export const store = configureStore({
	reducer: {
		app: appSlice
	},
	preloadedState: getParseLocalStorageData(LocalStorageKey.THEME, {})
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

store.subscribe(() => {
	setDataToLocalStorage<{ app: { theme: ThemeType } }>(LocalStorageKey.THEME, { app: { theme: store.getState().app.theme } })
})
