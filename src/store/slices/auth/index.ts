import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCaptchaUrl, getUserData, login, logOut } from 'store/asyncActions/auth'
import { AuthSliceInitialStateType, UserDataType } from './types'

const initialState: AuthSliceInitialStateType = {
	isAuth: false,
	isInitializedApp: false,
	userData: null,
	captchaUrl: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getUserData.fulfilled, (state, action: PayloadAction<UserDataType>) => {
				state.userData = action.payload
				state.isAuth = true
				state.isInitializedApp = true
			})
			.addCase(getUserData.rejected, (state) => {
				state.isInitializedApp = true
			})
			.addCase(getCaptchaUrl.fulfilled, (state, action) => {
				state.captchaUrl = action.payload
			})
			.addCase(logOut.fulfilled, (state) => {
				state.userData = null
				state.isAuth = false
			})
			.addCase(login.fulfilled, (state) => {
				state.captchaUrl = null
			})
	},
})

export default authSlice.reducer
