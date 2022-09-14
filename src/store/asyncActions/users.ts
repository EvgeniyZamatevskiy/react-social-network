import { createAsyncThunk } from '@reduxjs/toolkit'
import { FOLLOW, USERS } from 'api'
import { UserType } from 'api/users/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENT_ARRAY } from 'constants/base'
import { ResponseCode } from 'enums'
import { setDisabledUserId } from 'store/slices/users'
import { FilterType } from 'store/slices/users/types'
import { handleServerNetworkError } from 'utils'

export const getUsers = createAsyncThunk
	<
		{ users: UserType[], totalCount: number, page: number, filter: FilterType },
		{ count: number, page: number, filter: FilterType },
		{ rejectValue: { error: string } }
	>
	('users/getUsers', async (params, { rejectWithValue }) => {
		try {
			const response = await USERS.getUsers(params.count, params.page, params.filter)
			const { items: users, totalCount } = response.data

			return { users, totalCount, page: params.page, filter: params.filter }
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const follow = createAsyncThunk
	<
		number,
		number,
		{ rejectValue: { error: string } }
	>
	('users/follow', async (userId, { rejectWithValue, dispatch }) => {

		dispatch(setDisabledUserId({ id: userId, isDisabled: true }))

		try {
			const response = await FOLLOW.follow(userId)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				dispatch(setDisabledUserId({ id: userId, isDisabled: false }))
				return userId
			} else {
				dispatch(setDisabledUserId({ id: userId, isDisabled: false }))
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			dispatch(setDisabledUserId({ id: userId, isDisabled: false }))
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const unfollow = createAsyncThunk
	<
		number,
		number,
		{ rejectValue: { error: string } }
	>
	('users/unfollow', async (userId, { rejectWithValue, dispatch }) => {

		dispatch(setDisabledUserId({ id: userId, isDisabled: true }))

		try {
			const response = await FOLLOW.unfollow(userId)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				dispatch(setDisabledUserId({ id: userId, isDisabled: false }))
				return userId
			} else {
				dispatch(setDisabledUserId({ id: userId, isDisabled: false }))
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			dispatch(setDisabledUserId({ id: userId, isDisabled: false }))
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})
