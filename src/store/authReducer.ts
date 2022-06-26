import { AUTH } from 'api'
import { SECURITY } from 'api/security'
import { LoginParamsType } from 'api/types'
import { ThunkType } from 'store/store'
import { Nullable } from 'types'
import { setErrorAC } from './appReducer'

const initialState: InitialStateType = {
	isAuth: false,
	isInitialized: false,
	email: null,
	id: null,
	login: null,
	captchaUrl: null
}

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'auth/SET-IS-AUTH':
			return { ...state, isAuth: action.isAuth }
		case 'auth/SET-USER-DATA':
			return { ...state, ...action.userData }
		case 'auth/SET-IS-INITIALIZED-APP':
			return { ...state, isInitialized: action.isInitialized }
		case 'auth/SET-CAPTCHA-URL':
			return { ...state, captchaUrl: action.captchaUrl }

		default:
			return state
	}
}

// ActionCreators
export const setUserDataAC = (userData: UserDataType) => ({ type: 'auth/SET-USER-DATA', userData } as const)

export const setIsAuthAC = (isAuth: boolean) => ({ type: 'auth/SET-IS-AUTH', isAuth } as const)

export const setIsInitializedAppAC = (isInitialized: boolean) => ({ type: 'auth/SET-IS-INITIALIZED-APP', isInitialized } as const)

export const setCaptchaUrlAC = (captchaUrl: Nullable<string>) => ({ type: 'auth/SET-CAPTCHA-URL', captchaUrl } as const)

// ThunksCreators
export const getUserDataTC = (): ThunkType => async (dispatch) => {
	try {
		const response = await AUTH.me()
		const { data: userData, resultCode, messages } = response.data

		if (resultCode === 0) {
			dispatch(setUserDataAC(userData))
			dispatch(setIsAuthAC(true))
		} else {
			dispatch(setErrorAC(messages[0]))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const loginTC = (loginParams: LoginParamsType): ThunkType => async (dispatch) => {
	try {
		const response = await AUTH.login(loginParams)
		const { messages, resultCode } = response.data

		if (resultCode === 0) {
			const resetCaptchaUrl = null

			dispatch(getUserDataTC())
			dispatch(setCaptchaUrlAC(resetCaptchaUrl))
		} else {
			if (resultCode === 10) {
				dispatch(getCaptchaUrlTC())
			}
			dispatch(setErrorAC(messages[0]))
		}

	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const logoutTC = (): ThunkType => async (dispatch) => {
	try {
		const response = await AUTH.logout()
		const { messages, resultCode } = response.data

		if (resultCode === 0) {
			const resetUserData = { email: null, id: null, login: null }
			dispatch(setUserDataAC(resetUserData))
			dispatch(setIsAuthAC(false))
		} else {
			dispatch(setErrorAC(messages[0]))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const initializeAppTC = (): ThunkType => (dispatch) => {
	const promise = dispatch(getUserDataTC())

	Promise.all([promise])
		.then(() => dispatch(setIsInitializedAppAC(true)))
}

export const getCaptchaUrlTC = (): ThunkType => async (dispatch) => {
	try {
		const response = await SECURITY.getCaptcha()
		const { url } = response.data

		dispatch(setCaptchaUrlAC(url))
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

//types
type UserDataType = {
	id: Nullable<number>
	email: Nullable<string>
	login: Nullable<string>
}

export type InitialStateType = {
	isAuth: boolean
	isInitialized: boolean
	email: Nullable<string>
	id: Nullable<number>
	login: Nullable<string>
	captchaUrl: Nullable<string>
}

export type AuthReducerActionsType =
	ReturnType<typeof setIsAuthAC> |
	ReturnType<typeof setUserDataAC> |
	ReturnType<typeof setIsInitializedAppAC> |
	ReturnType<typeof setCaptchaUrlAC>
