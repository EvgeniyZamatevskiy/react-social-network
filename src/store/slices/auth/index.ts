import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {AuthorizedUserType} from "api/auth/types"
import {EMPTY_STRING} from "constants/base"
import {getAuthorizedUser, getCaptchaUrl, logOut} from "store/asyncActions"
import {AuthSliceInitialStateType} from "./types"

const initialState: AuthSliceInitialStateType = {
  authorizedUser: null,
  isAuth: false,
  captchaUrl: EMPTY_STRING,
}

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAuthorizedUser.fulfilled, (state, action: PayloadAction<AuthorizedUserType>) => {
        state.authorizedUser = action.payload
        state.isAuth = true
        state.captchaUrl = EMPTY_STRING
      })
      .addCase(logOut.fulfilled, (state) => {
        state.authorizedUser = null
        state.isAuth = false
      })
      .addCase(getCaptchaUrl.fulfilled, (state, action: PayloadAction<string>) => {
        state.captchaUrl = action.payload
      })
  },
})

export default authSlice.reducer
