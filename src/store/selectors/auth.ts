import { Nullable } from 'types/Nullable'
import { RootStateType } from 'store'

export const selectIsAuth = (state: RootStateType): Nullable<boolean> => state.auth.isAuth

export const selectAuthorizedUserEmail = (state: RootStateType): Nullable<string> => state.auth.authorizedUserData!?.email

export const selectAuthorizedUserId = (state: RootStateType): Nullable<number> => state.auth.authorizedUserData!?.id

export const selectAuthorizedUserLogin = (state: RootStateType): Nullable<string> => state.auth.authorizedUserData!?.login

export const selectIsInitializedApp = (state: RootStateType): boolean => state.auth.isInitializedApp

export const selectCaptchaUrl = (state: RootStateType): Nullable<string> => state.auth.captchaUrl
