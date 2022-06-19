import { Nullable } from 'types/Nullable'
import { RootReducerType } from 'store/store'

export const getId = (state: RootReducerType): Nullable<number> => state.auth.id
export const getLogin = (state: RootReducerType): Nullable<string> => state.auth.login
export const getEmail = (state: RootReducerType): Nullable<string> => state.auth.email
export const getIsAuth = (state: RootReducerType): Nullable<boolean> => state.auth.isAuth
export const getCaptchaUrl = (state: RootReducerType): Nullable<string> => state.auth.captchaUrl