import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {EMPTY_STRING} from "constants/base"
import {getAuthorizedUser, getUserProfile, login} from "store/asyncActions"
import {isErrorRejected} from "store/helpers"
import {AppSliceInitialStateType} from "./types"

const initialState: AppSliceInitialStateType = {
  errorMessage: EMPTY_STRING,
  isLoading: false,
  isInitializedApp: false,
  isDisabled: false,
  isLoadingUserProfile: false
}

export const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isDisabled = true
        state.isLoading = true
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.isDisabled = false
      })
      .addCase(getAuthorizedUser.fulfilled, (state) => {
        state.isInitializedApp = true
        state.isDisabled = false
        state.isLoading = false
      })
      .addCase(getAuthorizedUser.rejected, (state) => {
        state.isInitializedApp = true
        state.isLoading = false
        state.isDisabled = false
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoadingUserProfile = true
      })
      .addCase(getUserProfile.fulfilled, (state) => {
        state.isLoadingUserProfile = false
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.isLoadingUserProfile = false
      })
      .addMatcher(isErrorRejected, (state, action: PayloadAction<{ error: string }>) => {
        state.errorMessage = action.payload.error
      })
  },
})

export default appSlice.reducer

export const {setErrorMessage} = appSlice.actions
