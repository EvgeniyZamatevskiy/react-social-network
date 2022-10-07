import { createAsyncThunk } from '@reduxjs/toolkit'
import { PROFILE } from 'api'
import { UserProfileType } from 'api/profile/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENTS_INDEX } from 'constants/base'
import { ResponseCode } from 'enums'
import { handleServerNetworkError } from 'utils'
import { RootStateType } from '../index'
import { PhotoType } from 'api/types'

export const getUserProfile = createAsyncThunk<UserProfileType, number, { rejectValue: { error: string } }>
('profile/getUserProfile', async (userId, {rejectWithValue}) => {
  try {
    const {data: userProfile} = await PROFILE.getUserProfile(userId)

    return userProfile
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const getStatus = createAsyncThunk<string, number, { rejectValue: { error: string } }>
('profile/getStatus', async (userId, {rejectWithValue}) => {
  try {
    const {data: status} = await PROFILE.getStatus(userId)

    return status
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const updateStatus = createAsyncThunk<void, string, { rejectValue: { error: string }, state: RootStateType }>
('profile/updateStatus', async (status, {rejectWithValue, dispatch, getState}) => {
  try {
    const authorizedUserId = getState().auth.authorizedUser?.id as number

    const response = await PROFILE.updateStatus(status)
    const {messages, resultCode} = response.data

    if (resultCode === ResponseCode.SUCCESS) {
      dispatch(getStatus(authorizedUserId))
    } else {
      return rejectWithValue({error: messages[FIRST_ELEMENTS_INDEX]})
    }

  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const updatePhoto = createAsyncThunk<{ photos: PhotoType }, File, { rejectValue: { error: string } }>
('profile/updatePhoto', async (image, {rejectWithValue}) => {
  try {
    const response = await PROFILE.updatePhoto(image)
    const {data: photos, messages, resultCode} = response.data

    if (resultCode === ResponseCode.SUCCESS) {
      return photos
    } else {
      return rejectWithValue({error: messages[FIRST_ELEMENTS_INDEX]})
    }
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const updateUserProfile = createAsyncThunk<UserProfileType, UserProfileType, { rejectValue: { error: string } }>
('profile/updateUserProfile', async (updatedUserProfile, {rejectWithValue}) => {
  try {
    const response = await PROFILE.updateUserProfile(updatedUserProfile)
    const {resultCode, messages} = response.data

    if (resultCode === ResponseCode.SUCCESS) {
      return updatedUserProfile
    } else {
      return rejectWithValue({error: messages[FIRST_ELEMENTS_INDEX]})
    }
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})
