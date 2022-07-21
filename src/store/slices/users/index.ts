import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'api/users/types'
import { EMPTY_STRING } from 'constants/base'
import { logOut } from 'store/asyncActions'
import { follow, getUsers, unfollow } from 'store/asyncActions/users'
import { FilterType, UsersSliceInitialStateType } from './types'

const initialState: UsersSliceInitialStateType = {
	users: [],
	count: 9,
	page: 1,
	totalCount: 0,
	filter: { term: EMPTY_STRING, friend: null }
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setIsDisabled(state, action: PayloadAction<{ id: number, isDisabled: boolean }>) {
			const user = state.users.find(user => user.id === action.payload.id)
			if (user) {
				user.isDisabled = action.payload.isDisabled
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getUsers.fulfilled,
				(state, action: PayloadAction<{ users: UserType[], totalCount: number, page: number, filter: FilterType }>) => {
					state.users = action.payload.users.map(user => ({ ...user, isDisabled: false }))
					state.totalCount = action.payload.totalCount
					state.page = action.payload.page
					state.filter = action.payload.filter
				})
			.addCase(follow.fulfilled, (state, action: PayloadAction<number>) => {
				const user = state.users.find(user => user.id === action.payload)
				if (user) {
					user.followed = true
				}
			})
			.addCase(unfollow.fulfilled, (state, action: PayloadAction<number>) => {
				const user = state.users.find(user => user.id === action.payload)
				if (user) {
					user.followed = false
				}
			})
			.addCase(logOut.fulfilled, (state) => {
				state.users = []
				state.totalCount = 0
				state.page = 1
				state.count = 9
				state.filter.friend = null
				state.filter.term = EMPTY_STRING
			})
	},
})

export const { setIsDisabled } = usersSlice.actions

export default usersSlice.reducer
