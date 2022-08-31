import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH, SECURITY } from 'api'
import { LoginParamsType } from 'api/auth/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENT_ARRAY } from 'constants/base'
import { ResponseCode } from 'enums'
import { AuthorizedUserDataType } from 'store/slices/auth/types'
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
			const { data: authorizedUserData, resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				return authorizedUserData
			} else {
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
			const response = await SECURITY.getCaptchaUrl()
			const url = response.data.url

			return url
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const login = createAsyncThunk
	<
		void,
		LoginParamsType,
		{ rejectValue: { error: string } }
	>
	('auth/login', async (loginParams, { rejectWithValue, dispatch }) => {
		try {
			const response = await AUTH.login(loginParams)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				dispatch(getAuthorizedUserData())
				return
			}

			if (resultCode === ResponseCode.CAPTCHA_IS_REQUIRED) {
				dispatch(getCaptchaUrl())
				return
			}

			return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })

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
			const { resultCode, messages } = response.data

			if (resultCode !== ResponseCode.SUCCESS) {
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})
