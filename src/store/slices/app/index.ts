import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EMPTY_STRING } from 'constants/base'
import { getAuthorizedUserData, login } from 'store/asyncActions'
import { isErrorRejected } from 'store/helpers'
import { AppSliceInitialStateType, ThemeType } from './types'

const initialState: AppSliceInitialStateType = {
	theme: 'light',
	errorMessage: EMPTY_STRING,
	isLoading: false,
	isInitializedApp: false,
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
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(getAuthorizedUserData.fulfilled, (state) => {
				state.isInitializedApp = true
				state.isLoading = false
			})
			.addCase(getAuthorizedUserData.rejected, (state) => {
				state.isInitializedApp = true
			})
			.addMatcher(isErrorRejected, (state, action: PayloadAction<{ error: string }>) => {
				state.errorMessage = action.payload.error
			})
	},
})

export default appSlice.reducer

export const { setTheme, setErrorMessage } = appSlice.actions 
