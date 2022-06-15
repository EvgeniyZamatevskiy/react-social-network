import { setAppIsInitializedAC } from './../app-reducer/actions'
import { authAPI, LoginParamsType, UserDataType } from './../../../api/authAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const setUserDataAC = (userData: UserDataType, isAuth: boolean) => ({ type: 'SET-USER-DATA', userData, isAuth } as const)

export const toggleIsAuthAC = (isAuth: boolean) => ({ type: 'TOGGLE-IS-AUTH', isAuth } as const)

// ThunkCreators
export const getUserDataTC = (): ThunkType => async (dispatch) => {
	try {
		const res = await authAPI.me()
		if (res.data.resultCode === 0) {
			dispatch(setUserDataAC(res.data.data, true))
		} else {
			alert(res.data.messages[0])
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

export const authAsyncActions = {
	getUserDataTC,
	loginTC,
	logoutTC
}

export const authActions = {
	setUserDataAC,
	toggleIsAuthAC
}

// types
export type AuthReducerActionsType = SetUserDataActionType | ToggleIsAuthActionType

type SetUserDataActionType = ReturnType<typeof setUserDataAC>
type ToggleIsAuthActionType = ReturnType<typeof toggleIsAuthAC> 
