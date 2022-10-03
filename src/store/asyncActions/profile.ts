import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH, PROFILE } from 'api'
import { AuthorizedUserDataType } from 'api/auth/types'
import { UserProfileType } from 'api/profile/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENT_ARRAY } from 'constants/base'
import { ResponseCode } from 'enums'
import { handleServerNetworkError } from 'utils'

export const getUserProfile = createAsyncThunk<UserProfileType, number, { rejectValue: { error: string } }>
('profile/getUserProfile', async (userId, {rejectWithValue}) => {
  try {
    const response = await PROFILE.getUserProfile(userId)
    const userProfile = response.data

    return userProfile
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})
