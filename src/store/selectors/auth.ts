import { Nullable } from 'types/Nullable'
import { RootStateType } from 'store'
import { UserDataType } from 'store/slices/auth/types'

export const selectIsAuth = (state: RootStateType): Nullable<boolean> => state.auth.isAuth
export const selectUserData = (state: RootStateType): Nullable<UserDataType> => state.auth.userData
export const selectIsInitializedApp = (state: RootStateType): boolean => state.auth.isInitializedApp
export const selectCaptchaUrl = (state: RootStateType): Nullable<string> => state.auth.captchaUrl
