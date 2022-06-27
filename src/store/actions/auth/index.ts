import { UserDataType } from 'store/reducers/auth/types'
import { Nullable } from 'types'

export const setUserDataAC = (userData: UserDataType) => ({ type: 'auth/SET-USER-DATA', userData } as const)

export const setIsAuthAC = (isAuth: boolean) => ({ type: 'auth/SET-IS-AUTH', isAuth } as const)

export const setIsInitializedAppAC = (isInitialized: boolean) => ({ type: 'auth/SET-IS-INITIALIZED-APP', isInitialized } as const)

export const setCaptchaUrlAC = (captchaUrl: Nullable<string>) => ({ type: 'auth/SET-CAPTCHA-URL', captchaUrl } as const)
