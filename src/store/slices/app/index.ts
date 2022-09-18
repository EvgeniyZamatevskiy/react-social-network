import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppSliceInitialStateType, ThemeType } from './types'

const initialState: AppSliceInitialStateType = {
	theme: 'light'
}

export const appSlice = createSlice({
	initialState,
	name: 'app',
	reducers: {
		setTheme(state, action: PayloadAction<ThemeType>) {
			state.theme = action.payload
		},
	},
})

export default appSlice.reducer

export const { setTheme } = appSlice.actions 
