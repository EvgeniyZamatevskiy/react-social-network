import { RootReducerType } from '../../store'

export const selectId = (state: RootReducerType) => state.auth.id
export const selectLogin = (state: RootReducerType) => state.auth.login
export const selectEmail = (state: RootReducerType) => state.auth.email
export const selectIsAuth = (state: RootReducerType) => state.auth.isAuth
export const selectCaptchaUrl = (state: RootReducerType) => state.auth.captchaUrl