import {configureStore} from "@reduxjs/toolkit"
import {LocalStorageKey} from "enums"
import {setDataToLocalStorage, getParseLocalStorageData} from "services"
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
  // preloadedState: getParseLocalStorageData(LocalStorageKey.THEME, {})
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

store.subscribe(() => {
  // setDataToLocalStorage<{ app: { theme: Theme } }>(LocalStorageKey.THEME, {app: {theme: store.getState().app.theme}})
})
