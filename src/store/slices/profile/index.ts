import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProfileType } from 'api/profile/types'
import { getStatus, getUserProfile, updatePhoto, updateUserProfile } from 'store/asyncActions'
import { ProfileSliceInitialStateType } from './types'
import { EMPTY_STRING } from 'constants/base'
import { PhotoType } from 'api/types'
import { Nullable } from 'types'

const initialState: ProfileSliceInitialStateType = {
  userProfile: null,
  status: EMPTY_STRING,
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
      .addCase(getStatus.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = action.payload
      })
      .addCase(updatePhoto.fulfilled, (state, action: PayloadAction<{ photos: PhotoType }>) => {
        if (state.userProfile) {
          state.userProfile.photos = {...action.payload.photos}
        }
      })
      .addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
        state.userProfile = action.payload
      })
  },
})

export default profileSlice.reducer

export const {} = profileSlice.actions
