import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'api/users/types'
import { follow, getUsers, unfollow } from 'store/asyncActions'
import { UsersSliceInitialStateType } from './types'

const initialState: UsersSliceInitialStateType = {
	users: [],
	totalUsersCount: 0,
	isLoadingUsers: false,
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
				state.users = action.payload.users.map(user => ({ ...user, followedStatus: { isDisabled: false, isLoading: false } }))
				state.totalUsersCount = action.payload.totalCount
				state.isLoadingUsers = false
			})
			.addCase(follow.pending, (state, action) => {
				const user = state.users.find(user => user.id === action.meta.arg)

				if (user) {
					user.followedStatus.isDisabled = true
					user.followedStatus.isLoading = true
				}
			})
			.addCase(follow.rejected, (state, action) => {
				const user = state.users.find(user => user.id === action.meta.arg)

				if (user) {
					user.followedStatus.isDisabled = false
					user.followedStatus.isLoading = false
				}
			})
			.addCase(follow.fulfilled, (state, action: PayloadAction<number>) => {
				const user = state.users.find(user => user.id === action.payload)

				if (user) {
					user.followed = true
					user.followedStatus.isDisabled = false
					user.followedStatus.isLoading = false
				}
			})
			.addCase(unfollow.pending, (state, action) => {
				const user = state.users.find(user => user.id === action.meta.arg)

				if (user) {
					user.followedStatus.isDisabled = true
					user.followedStatus.isLoading = true
				}
			})
			.addCase(unfollow.rejected, (state, action) => {
				const user = state.users.find(user => user.id === action.meta.arg)

				if (user) {
					user.followedStatus.isDisabled = false
					user.followedStatus.isLoading = false
				}
			})
			.addCase(unfollow.fulfilled, (state, action: PayloadAction<number>) => {
				const user = state.users.find(user => user.id === action.payload)

				if (user) {
					user.followed = false
					user.followedStatus.isDisabled = false
					user.followedStatus.isLoading = false
				}
			})
	},
})

export default usersSlice.reducer

export const { } = usersSlice.actions 