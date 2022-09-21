import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH } from 'api'
import { AuthorizedUserDataType, LoginDataType } from 'api/auth/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENT_ARRAY } from 'constants/base'
import { ResponseCode } from 'enums'
import { handleServerNetworkError } from 'utils'

export const getAuthorizedUserData = createAsyncThunk
	<
		AuthorizedUserDataType,
		undefined,
		{ rejectValue: { error: string } }
	>
	('auth/getAuthorizedUserData', async (_, { rejectWithValue }) => {
		try {
			const response = await AUTH.me()
			const { data: authorizedUserData, messages, resultCode } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				return authorizedUserData
			} else {
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const login = createAsyncThunk
	<
		void,
		LoginDataType,
		{ rejectValue: { error: string } }
	>
	('auth/login', async (loginData, { rejectWithValue, dispatch }) => {
		try {
			const response = await AUTH.login(loginData)
			const { messages, resultCode } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				dispatch(getAuthorizedUserData())
			} else {
				if (resultCode === ResponseCode.CAPTCHA_IS_REQUIRED) {
					dispatch(getCaptchaUrl())
				}
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const logOut = createAsyncThunk
	<
		void,
		undefined,
		{ rejectValue: { error: string } }
	>
	('auth/logOut', async (_, { rejectWithValue }) => {
		try {
			const response = await AUTH.logOut()
			const { messages, resultCode } = response.data

			if (resultCode !== ResponseCode.SUCCESS) {
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}

		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const getCaptchaUrl = createAsyncThunk
	<
		string,
		undefined,
		{ rejectValue: { error: string } }
	>
	('auth/getCaptchaUrl', async (_, { rejectWithValue }) => {
		try {
			const response = await AUTH.getCaptchaUrl()
			const url = response.data.url

			return url
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})
