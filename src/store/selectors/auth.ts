import { Nullable } from 'types/Nullable'
import { RootReducerType } from 'store/store'

export const selectId = (state: RootReducerType): Nullable<number> => state.auth.id
export const selectLogin = (state: RootReducerType): Nullable<string> => state.auth.login
export const selectEmail = (state: RootReducerType): Nullable<string> => state.auth.email
export const selectIsAuth = (state: RootReducerType): Nullable<boolean> => state.auth.isAuth
export const selectCaptchaUrl = (state: RootReducerType): Nullable<string> => state.auth.captchaUrl