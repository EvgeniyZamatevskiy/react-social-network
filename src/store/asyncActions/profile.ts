import { createAsyncThunk } from '@reduxjs/toolkit'
import { PROFILE } from 'api'
import { UserProfileType } from 'api/profile/types'
import { PhotosType } from 'api/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENT_ARRAY } from 'constants/base'
import { ResponseCode } from 'enums'
import { handleServerNetworkError } from 'utils'

export const getUserProfile = createAsyncThunk
	<
		UserProfileType,
		number, { rejectValue: { error: string } }
	>
	('profile/getUserProfile', async (userId, { rejectWithValue }) => {

		try {
			const response = await PROFILE.getUserProfile(userId)
			const userProfile = response.data

			return userProfile
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const getUserStatus = createAsyncThunk
	<
		string,
		number,
		{ rejectValue: { error: string } }
	>
	('profile/getUserStatus', async (userId, { rejectWithValue }) => {
		try {
			const response = await PROFILE.getUserStatus(userId)
			const userStatus = response.data

			return userStatus
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const updateUserStatus = createAsyncThunk
	<
		string,
		string,
		{ rejectValue: { error: string } }
	>
	('profile/updateUserStatus', async (newStatus, { rejectWithValue }) => {
		try {
			const response = await PROFILE.updateUserStatus(newStatus)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				return newStatus
			} else {
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const updateUserPhoto = createAsyncThunk
	<
		PhotosType,
		File,
		{ rejectValue: { error: string } }
	>
	('profile/updateUserPhoto', async (image, { rejectWithValue }) => {
		try {
			const response = await PROFILE.updateUserPhoto(image)
			const { data, resultCode, messages } = response.data
			const photos = data.photos

			if (resultCode === ResponseCode.SUCCESS) {
				return photos
			} else {
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const updateUserProfile = createAsyncThunk
	<
		UserProfileType,
		UserProfileType,
		{ rejectValue: { error: string } }
	>
	('profile/updateUserProfile', async (updatedUserProfile, { rejectWithValue }) => {
		try {
			const response = await PROFILE.updateUserProfile(updatedUserProfile)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				return updatedUserProfile
			} else {
				return rejectWithValue({ error: messages[FIRST_ELEMENT_ARRAY] })
			}
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})
