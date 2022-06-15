import { instance } from './instance'

export const authAPI = {
	me() {
		return instance.get<CommonResponseType<UserDataType>>('auth/me')
	},
	login(loginParams: LoginParamsType) {
		return instance.post('auth/login', loginParams)
	},
	logout() {
		return instance.delete<CommonResponseType>('auth/login')
	}
}

// auth
export type UserDataType = {
	id: number | null
	login: string | null
	email: string | null
}

export type LoginParamsType = {
	email: string
	password: string
	rememberMe: boolean
	captcha?: string
}

//common
export type CommonResponseType<T = {}> = {
	data: T
	messages: string[]
	fieldsErrors: string[]
	resultCode: number
}