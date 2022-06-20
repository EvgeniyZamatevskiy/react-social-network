import { AUTH, SECURITY } from 'api'
import { LoginParamsType } from 'api/auth/types'
import { setUserDataAC, getCaptchaUrlAC } from 'store/actions/auth'
import { ThunkType } from 'store/store'

// ThunkCreators
export const getUserDataTC = (): ThunkType => async (dispatch) => {
	try {
		const data = await AUTH.me()
		const { resultCode, messages } = data

		if (resultCode === 0) {
			return dispatch(setUserDataAC(data.data, true))
		}
		alert(messages[0])
	} catch (error: any) {
		alert(error.message)
	}
}

export const loginTC = (loginParams: LoginParamsType): ThunkType => async (dispatch) => {
	try {
		const data = await AUTH.login(loginParams)
		if (data.resultCode === 0) {
			dispatch(getUserDataTC())
		} else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaUrlTC())
			}
			alert(data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const logoutTC = (): ThunkType => async (dispatch) => {
	try {
		const data = await AUTH.logout()
		if (data.resultCode === 0) {
			dispatch(setUserDataAC({ id: null, login: null, email: null }, false))
		} else {
			alert(data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const getCaptchaUrlTC = (): ThunkType => async (dispatch) => {
	try {
		const data = await SECURITY.getCaptchaUrl()
		dispatch(getCaptchaUrlAC(data.url))
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