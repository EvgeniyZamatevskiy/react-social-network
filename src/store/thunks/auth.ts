import { authAPI, securityAPI } from 'api'
import { LoginParamsType } from 'api/types/auth'
import { setUserDataAC, getCaptchaUrlAC } from 'store/action-creators/auth'
import { ThunkType } from 'store/store'

// ThunkCreators
export const getUserDataTC = (): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.me()
		if (data.resultCode === 0) {
			dispatch(setUserDataAC(data.data, true))
			return
		}
		alert(data.messages[0])
	} catch (error: any) {
		alert(error.message)
	}
}

export const loginTC = (loginParams: LoginParamsType): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.login(loginParams)
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
		const data = await authAPI.logout()
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
		const data = await securityAPI.getCaptchaUrl()
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