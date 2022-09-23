import { createSlice } from '@reduxjs/toolkit'
import { UsersSliceInitialStateType } from './types'

const initialState: UsersSliceInitialStateType = {
	users: []
}

export const usersSlice = createSlice({
	initialState,
	name: 'users',
	reducers: {},
	extraReducers(builder) {
		builder
		// .addCase(getAuthorizedUserData.fulfilled, (state, action: PayloadAction<AuthorizedUserDataType>) => {
		// 	state.authorizedUserData = action.payload
		// 	state.isAuth = true
		// 	state.captchaUrl = EMPTY_STRING
		// })
	},
})

export default usersSlice.reducer

export const { } = usersSlice.actions 
