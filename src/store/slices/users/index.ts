import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'api/users/types'
import { follow, getUsers, unfollow } from 'store/asyncActions'
import { UsersSliceInitialStateType } from './types'

const initialState: UsersSliceInitialStateType = {
	users: [],
	totalUsersCount: 0,
	isLoadingUsers: false,
	isLoadingFollowStatus: false,
	usersId: []
}

export const usersSlice = createSlice({
	initialState,
	name: 'users',
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getUsers.pending, (state) => {
				state.isLoadingUsers = true
			})
			.addCase(getUsers.rejected, (state) => {
				state.isLoadingUsers = false
			})
			.addCase(getUsers.fulfilled, (state, action: PayloadAction<{ users: UserType[], totalCount: number }>) => {
				state.users = action.payload.users
				state.totalUsersCount = action.payload.totalCount
				state.isLoadingUsers = false
			})
			.addCase(follow.pending, (state) => {
				state.isLoadingFollowStatus = true
			})
			.addCase(follow.rejected, (state) => {
				state.isLoadingFollowStatus = false
			})
			.addCase(follow.fulfilled, (state, action: PayloadAction<number>) => {
				const user = state.users.find(user => user.id === action.payload)

				if (user) {
					user.followed = true
				}

				state.isLoadingFollowStatus = false
			})
			.addCase(unfollow.pending, (state) => {
				state.isLoadingFollowStatus = true
			})
			.addCase(unfollow.rejected, (state) => {
				state.isLoadingFollowStatus = false
			})
			.addCase(unfollow.fulfilled, (state, action: PayloadAction<number>) => {
				const user = state.users.find(user => user.id === action.payload)

				if (user) {
					user.followed = false
				}

				state.isLoadingFollowStatus = false
			})
	},
})

export default usersSlice.reducer

export const { } = usersSlice.actions 
