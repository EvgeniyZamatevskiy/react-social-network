import { RootStateType } from 'store'

export const selectAuthorizedUserDataId = (state: RootStateType): number => state.auth.authorizedUserData!?.id

export const selectAuthorizedUserDataEmail = (state: RootStateType): string => state.auth.authorizedUserData!?.email

export const selectAuthorizedUserDataLogin = (state: RootStateType): string => state.auth.authorizedUserData!?.login

export const selectIsAuth = (state: RootStateType): boolean => state.auth.isAuth

export const selectCaptchaUrl = (state: RootStateType): string => state.auth.captchaUrl
