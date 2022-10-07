import { RootStateType } from 'store'

export const selectAuthorizedUserId = (state: RootStateType): number | undefined => state.auth.authorizedUser?.id

export const selectAuthorizedUserEmail = (state: RootStateType): string | undefined => state.auth.authorizedUser?.email

export const selectAuthorizedUserLogin = (state: RootStateType): string | undefined => state.auth.authorizedUser?.login

export const selectIsAuth = (state: RootStateType): boolean => state.auth.isAuth

export const selectCaptchaUrl = (state: RootStateType): string => state.auth.captchaUrl
