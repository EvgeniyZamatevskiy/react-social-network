import {RootStateType} from "store"

export const selectAuthorizedUserId = (state: RootStateType): number => state.auth.authorizedUser!?.id

export const selectAuthorizedUserEmail = (state: RootStateType): string => state.auth.authorizedUser!?.email

export const selectAuthorizedUserLogin = (state: RootStateType): string => state.auth.authorizedUser!?.login

export const selectIsAuth = (state: RootStateType): boolean => state.auth.isAuth

export const selectCaptchaUrl = (state: RootStateType): string => state.auth.captchaUrl
