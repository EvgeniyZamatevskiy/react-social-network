import { setIsAuthAC, setUserDataAC, setIsInitializedAppAC, setCaptchaUrlAC } from 'store/actions/auth'
import { Nullable } from 'types'

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


export type UserDataType = {
	id: Nullable<number>
	email: Nullable<string>
	login: Nullable<string>
}
