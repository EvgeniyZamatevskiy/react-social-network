import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProfileType } from 'api/profile/types'
import { getStatus, getUserProfile, updatePhoto } from 'store/asyncActions'
import { ProfileSliceInitialStateType } from './types'
import { EMPTY_STRING } from 'constants/base'
import { PhotoType } from 'api/types'

const initialState: ProfileSliceInitialStateType = {
  userProfile: {} as UserProfileType,
  status: EMPTY_STRING,
  isLoadingStatus: false,
  isLoadingUserProfile: false,
}

export const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    clearState(state) {

    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoadingUserProfile = true
      })
      .addCase(getUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
        state.userProfile = action.payload
        state.isLoadingUserProfile = false
      })
      .addCase(getStatus.pending, (state) => {
        state.isLoadingStatus = true
      })
      .addCase(getStatus.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = action.payload
        state.isLoadingStatus = false
      })
      .addCase(updatePhoto.fulfilled, (state, action: PayloadAction<{ photos: PhotoType }>) => {
        state.userProfile.photos = {...action.payload.photos}
      })
  },
})

export default profileSlice.reducer

export const {} = profileSlice.actions
