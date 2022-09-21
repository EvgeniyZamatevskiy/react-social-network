import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EMPTY_STRING } from 'constants/base'
import { isErrorRejected } from 'store/helpers'
import { AppSliceInitialStateType, ThemeType } from './types'

const initialState: AppSliceInitialStateType = {
	theme: 'light',
	errorMessage: EMPTY_STRING
}

export const appSlice = createSlice({
	initialState,
	name: 'app',
	reducers: {
		setTheme(state, action: PayloadAction<ThemeType>) {
			state.theme = action.payload
		},
		setErrorMessage(state, action: PayloadAction<string>) {
			state.errorMessage = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addMatcher(isErrorRejected, (state, action: PayloadAction<{ error: string }>) => {
				state.errorMessage = action.payload.error
			})
	},
})

export default appSlice.reducer

export const { setTheme, setErrorMessage } = appSlice.actions 
