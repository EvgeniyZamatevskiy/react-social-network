import { Nullable } from 'types'

export type AuthSliceInitialStateType = {
	isAuth: boolean
	isInitializedApp: boolean
	authorizedUserData: Nullable<AuthorizedUserDataType>
	captchaUrl: Nullable<string>
}

export type AuthorizedUserDataType = {
	id: number
	email: string
	login: string
}
