import { authAPI, LoginParamsType } from './../../../api/authAPI'
import { ThunkType } from '../../store'
import { securityAPI } from '../../../api/securityAPI'
import { ResultCodeForCaptcha, ResultCodes } from '../../../enums/enums'

// ActionCreators
export const setUserDataAC = (userData: UserDataType, isAuth: boolean) => ({ type: 'SET-USER-DATA', userData, isAuth } as const)

export const toggleIsAuthAC = (isAuth: boolean) => ({ type: 'TOGGLE-IS-AUTH', isAuth } as const)

export const getCaptchaUrlAC = (captchaUrl: string) => ({ type: 'GET-CAPTCHA-URL', captchaUrl } as const)

// ThunkCreators
export const getUserDataTC = (): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.me()
		if (data.resultCode === ResultCodes.Success) {
			dispatch(setUserDataAC(data.data, true))
		} else {
			alert(data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const loginTC = (loginParams: LoginParamsType): ThunkType => async (dispatch) => {
	try {
		const res = await authAPI.login(loginParams)
		if (res.data.resultCode === 0) {
			dispatch(getUserDataTC())
		} else {
			if (res.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
				dispatch(getCaptchaUrlTC())
			}
			alert(res.data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const logoutTC = (): ThunkType => async (dispatch) => {
	try {
		const res = await authAPI.logout()
		if (res.data.resultCode === 0) {
			dispatch(setUserDataAC({ id: null, login: null, email: null }, false))
		} else {
			alert(res.data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const getCaptchaUrlTC = (): ThunkType => async (dispatch) => {
	try {
		const res = await securityAPI.getCaptchaUrl()
		dispatch(getCaptchaUrlAC(res.data.url))
	} catch (error: any) {
		alert(error.message)
	}
}

export const authAsyncActions = {
	getUserDataTC,
	loginTC,
	logoutTC,
	getCaptchaUrlTC
}

export const authActions = {
	setUserDataAC,
	toggleIsAuthAC,
	getCaptchaUrlAC
}

// types
export type AuthReducerActionsType = SetUserDataActionType | ToggleIsAuthActionType | GetCaptchaUrlAC

type SetUserDataActionType = ReturnType<typeof setUserDataAC>
type ToggleIsAuthActionType = ReturnType<typeof toggleIsAuthAC>
type GetCaptchaUrlAC = ReturnType<typeof getCaptchaUrlAC>

type UserDataType = {
	id: number | null,
	email: string | null
	login: string | null
}