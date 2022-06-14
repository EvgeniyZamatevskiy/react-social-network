import { setAppIsInitializedAC } from './../app-reducer/actions'
import { authAPI, UserDataType } from './../../../api/authAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const setUserDataAC = (userData: UserDataType) => ({ type: 'SET-USER-DATA', userData } as const)

// ThunkCreators
export const getUserDataTC = (): ThunkType => async (dispatch) => {
	try {
		const res = await authAPI.me()
		if (res.data.resultCode === 0) {
			dispatch(setUserDataAC(res.data.data))
		} else {
			alert(res.data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	} finally {
		dispatch(setAppIsInitializedAC(true))
	}
}

export const authAsyncActions = {
	getUserDataTC
}

export const authActions = {
	setUserDataAC
}

// types
export type AuthReducerActionsType = SetUserDataActionType

type SetUserDataActionType = ReturnType<typeof setUserDataAC> 
