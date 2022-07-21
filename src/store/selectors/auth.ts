import { Nullable } from 'types/Nullable'
import { RootStateType } from 'store'

export const selectIsAuth = (state: RootStateType): Nullable<boolean> => state.auth.isAuth

export const selectEmail = (state: RootStateType): Nullable<string> => state.auth.userData!?.email

export const selectId = (state: RootStateType): Nullable<number> => state.auth.userData!?.id

export const selectLogin = (state: RootStateType): Nullable<string> => state.auth.userData!?.login

export const selectIsInitializedApp = (state: RootStateType): boolean => state.auth.isInitializedApp

export const selectCaptchaUrl = (state: RootStateType): Nullable<string> => state.auth.captchaUrl
