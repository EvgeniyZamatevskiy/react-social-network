import { AUTH, SECURITY } from 'api'
import { LoginParamsType } from 'api/auth/types'
import { ERROR_MESSAGE } from 'constants/base'
import { ResponseCode } from 'enums'
import { setIsLoadingAC, setUserDataAC, setIsAuthAC, setErrorAC, setCaptchaUrlAC, setIsInitializedAppAC } from 'store/actions'
import { ThunkType } from 'store/store'

export const getUserDataTC = (): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const response = await AUTH.me()
		const { data: userData, resultCode, messages } = response.data

		if (resultCode === ResponseCode.Success) {
			dispatch(setUserDataAC(userData))
			dispatch(setIsAuthAC(true))
			dispatch(setIsLoadingAC(false))
		} else {
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
			dispatch(setIsLoadingAC(false))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
	}
}

export const loginTC = (loginParams: LoginParamsType): ThunkType => async (dispatch) => {
	try {
		const response = await AUTH.login(loginParams)
		const { resultCode, messages } = response.data

		if (resultCode === ResponseCode.Success) {
			const resetCaptchaUrl = null

			dispatch(getUserDataTC())
			dispatch(setCaptchaUrlAC(resetCaptchaUrl))
		} else {
			if (resultCode === ResponseCode.CaptchaIsRequired) {
				dispatch(getCaptchaUrlTC())
			}
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const logOutTC = (): ThunkType => async (dispatch) => {
	try {
		const response = await AUTH.logOut()
		const { resultCode, messages } = response.data

		if (resultCode === ResponseCode.Success) {
			const resetUserData = { email: null, id: null, login: null }

			dispatch(setUserDataAC(resetUserData))
			dispatch(setIsAuthAC(false))
		} else {
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
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
