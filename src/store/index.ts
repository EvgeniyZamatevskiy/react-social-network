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
  // preloadedState: getParseLocalStorageData(LocalStorageKey.POSTS, {})
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

// store.subscribe(() => {
//   setDataToLocalStorage<{ profile: { posts: PostType[] } }>(LocalStorageKey.POSTS, {profile: {posts: store.getState().profile.posts}})
// })
