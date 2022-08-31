import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCaptchaUrl, getAuthorizedUserData, login, logOut } from 'store/asyncActions/auth'
import { AuthorizedUserDataType, AuthSliceInitialStateType } from './types'

const initialState: AuthSliceInitialStateType = {
	isAuth: false,
	isInitializedApp: false,
	authorizedUserData: null,
	captchaUrl: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAuthorizedUserData.fulfilled, (state, action: PayloadAction<AuthorizedUserDataType>) => {
				state.authorizedUserData = action.payload
				state.isAuth = true
				state.isInitializedApp = true
			})
			.addCase(getAuthorizedUserData.rejected, (state) => {
				state.isInitializedApp = true
			})
			.addCase(getCaptchaUrl.fulfilled, (state, action) => {
				state.captchaUrl = action.payload
			})
			.addCase(logOut.fulfilled, (state) => {
				state.authorizedUserData = null
				state.isAuth = false
			})
			.addCase(login.fulfilled, (state) => {
				state.captchaUrl = null
			})
	},
})

export default authSlice.reducer
