import { createAsyncThunk } from '@reduxjs/toolkit'
import { FOLLOW, USERS } from 'api'
import { UserType } from 'api/users/types'
import { ResponseCode } from 'enums'
import { setIsDisabled } from 'store/slices/users'
import { FilterType } from 'store/slices/users/types'

export const getUsers = createAsyncThunk
	<{ users: UserType[], totalCount: number, page: number, filter: FilterType },
		{ count: number, page: number, filter: FilterType },
		{ rejectValue: { errors: string[] } }>
	('users/getUsers', async (params, { rejectWithValue }) => {
		try {
			const response = await USERS.getUsers(params.count, params.page, params.filter)
			const { items: users, totalCount } = response.data

			return { users, totalCount, page: params.page, filter: params.filter }
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const follow = createAsyncThunk
	<number, number, { rejectValue: { errors: string[] } }>
	('users/follow', async (userId, { rejectWithValue, dispatch }) => {

		dispatch(setIsDisabled({ id: userId, isDisabled: true }))

		try {
			const response = await FOLLOW.follow(userId)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				dispatch(setIsDisabled({ id: userId, isDisabled: false }))
				return userId
			} else {
				dispatch(setIsDisabled({ id: userId, isDisabled: false }))
				return rejectWithValue({ errors: messages })
			}
		} catch (error: any) {
			dispatch(setIsDisabled({ id: userId, isDisabled: false }))
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const unfollow = createAsyncThunk
	<number, number, { rejectValue: { errors: string[] } }>
	('users/unfollow', async (userId, { rejectWithValue, dispatch }) => {

		dispatch(setIsDisabled({ id: userId, isDisabled: true }))

		try {
			const response = await FOLLOW.unfollow(userId)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				dispatch(setIsDisabled({ id: userId, isDisabled: false }))
				return userId
			} else {
				dispatch(setIsDisabled({ id: userId, isDisabled: false }))
				return rejectWithValue({ errors: messages })
			}
		} catch (error: any) {
			dispatch(setIsDisabled({ id: userId, isDisabled: false }))
			return rejectWithValue({ errors: [error.message] })
		}
	})
