import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProfileType } from 'api/profile/types'
import { getStatus, getUserProfile, logOut, updatePhoto, updateUserProfile } from 'store/asyncActions'
import { ProfileSliceInitialStateType } from './types'
import { EMPTY_STRING } from 'constants/base'
import { PhotoType } from 'api/types'

const initialState: ProfileSliceInitialStateType = {
  userProfile: null,
  status: EMPTY_STRING,
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
      .addCase(getUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
        state.userProfile = action.payload
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
      .addCase(logOut.fulfilled, (state) => {
        state.userProfile = null
        state.status = EMPTY_STRING
      })
  },
})

export default profileSlice.reducer

export const {} = profileSlice.actions
