import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./slices/app"
import authSlice from "./slices/auth"
import usersSlice from "./slices/users"
import profileSlice from "./slices/profile"

export const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
    users: usersSlice,
    profile: profileSlice,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
