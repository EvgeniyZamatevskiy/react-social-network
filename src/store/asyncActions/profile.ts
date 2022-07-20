import { createAsyncThunk } from '@reduxjs/toolkit'
import { PROFILE } from 'api'
import { UserProfileType } from 'api/profile/types'
import { PhotosType } from 'api/types'
import { ResponseCode } from 'enums'

export const getUserProfile = createAsyncThunk
	<UserProfileType, number, { rejectValue: { errors: string[] } }>
	('profile/getUserProfile', async (userId, { rejectWithValue }) => {
		try {
			const response = await PROFILE.getUserProfile(userId)
			const userProfile = response.data

			return userProfile
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const getUserStatus = createAsyncThunk
	<string, number, { rejectValue: { errors: string[] } }>
	('profile/getUserStatus', async (userId, { rejectWithValue }) => {
		try {
			const response = await PROFILE.getUserStatus(userId)
			const userStatus = response.data

			return userStatus
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const updateUserStatus = createAsyncThunk
	<string, string, { rejectValue: { errors: string[] } }>
	('profile/updateUserStatus', async (newStatus, { rejectWithValue }) => {
		try {
			const response = await PROFILE.updateUserStatus(newStatus)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				return newStatus
			} else {
				return rejectWithValue({ errors: messages })
			}
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const updateUserPhoto = createAsyncThunk
	<PhotosType, File, { rejectValue: { errors: string[] } }>
	('profile/updateUserPhoto', async (image, { rejectWithValue }) => {
		try {
			const response = await PROFILE.updateUserPhoto(image)
			const { data, resultCode, messages } = response.data
			const photos = data.photos

			if (resultCode === ResponseCode.SUCCESS) {
				return photos
			} else {
				return rejectWithValue({ errors: messages })
			}
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const updateUserProfile = createAsyncThunk
	<UserProfileType, UserProfileType, { rejectValue: { errors: string[] } }>
	('profile/updateUserProfile', async (updatedUserProfile, { rejectWithValue }) => {
		try {
			const response = await PROFILE.updateUserProfile(updatedUserProfile)
			const { resultCode, messages } = response.data

			if (resultCode === ResponseCode.SUCCESS) {
				return updatedUserProfile
			} else {
				return rejectWithValue({ errors: messages })
			}
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})
