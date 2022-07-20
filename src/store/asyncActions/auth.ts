import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH, SECURITY } from 'api'
import { LoginParamsType } from 'api/auth/types'
import { ResponseCode } from 'enums'
import { UserDataType } from 'store/slices/auth/types'

export const getUserData = createAsyncThunk
	<UserDataType, undefined, { rejectValue: { errors: string[] } }>
	('auth/getUserData', async (_, { rejectWithValue }) => {
		try {
			const response = await AUTH.me()
			const { data: userData, resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				return userData
			} else {
				return rejectWithValue({ errors: messages })
			}
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const getCaptchaUrl = createAsyncThunk
	<string, undefined, { rejectValue: { errors: string[] } }>
	('auth/getCaptchaUrl', async (_, { rejectWithValue }) => {
		try {
			const response = await SECURITY.getCaptcha()
			const url = response.data.url

			return url
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const login = createAsyncThunk
	<void, LoginParamsType, { rejectValue: { errors: string[] } }>
	('auth/login', async (loginParams, { rejectWithValue, dispatch }) => {
		try {
			const response = await AUTH.login(loginParams)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				dispatch(getUserData())
				return
			}
			if (resultCode === ResponseCode.CAPTCHA_IS_REQUIRED) {
				dispatch(getCaptchaUrl())
				return
			}
			return rejectWithValue({ errors: messages })

		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const logOut = createAsyncThunk
	<void, undefined, { rejectValue: { errors: string[] } }>
	('auth/logOut', async (_, { rejectWithValue }) => {
		try {
			const response = await AUTH.logOut()
			const { resultCode, messages } = response.data

			if (resultCode !== ResponseCode.SUCCESS) {
				return rejectWithValue({ errors: messages })
			}
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})
