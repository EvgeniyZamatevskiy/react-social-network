import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProfileType } from 'api/profile/types'
import { getUserProfile } from 'store/asyncActions'
import { ProfileSliceInitialStateType } from './types'

const initialState: ProfileSliceInitialStateType = {
  userProfile: {} as UserProfileType
}

export const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    setTerm(state, action: PayloadAction<string>) {

    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
        state.userProfile = action.payload
      })
  },
})

export default profileSlice.reducer

export const {setTerm} = profileSlice.actions
