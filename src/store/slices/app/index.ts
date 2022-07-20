import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EMPTY_STRING } from 'constants/base'
import { isErrorRejected, isLoadingFulfilled, isLoadingPending, isLoadingRejected } from 'store/helpers'
import { InitialStateType } from './types'

const FIRST_ELEMENT_ARRAY = 0

const initialState: InitialStateType = {
	errorMessage: EMPTY_STRING,
	isLoading: false
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setErrorMessage(state, action: PayloadAction<string>) {
			state.errorMessage = action.payload
		}
	},
	extraReducers(builder) {
		builder
			.addMatcher(isErrorRejected, (state, action: PayloadAction<{ errors: string[] }>) => {
				state.errorMessage = action.payload.errors[FIRST_ELEMENT_ARRAY]
			})
			.addMatcher(isLoadingPending, (state) => {
				state.isLoading = true
			})
			.addMatcher(isLoadingFulfilled, (state) => {
				state.isLoading = false
			})
			.addMatcher(isLoadingRejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { setErrorMessage } = appSlice.actions

export default appSlice.reducer
