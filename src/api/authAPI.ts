import { instance } from './instance'

export const authAPI = {
	me() {
		return instance.get<CommonResponseType<MeResponseDataType>>('auth/me')
	},
	login(loginParams: LoginParamsType) {
		return instance.post<CommonResponseType<{ userId: number }>>('auth/login', loginParams)
	},
	logout() {
		return instance.delete('auth/login')
	}
}

//types
type MeResponseDataType = {
	id: number
	email: string
	login: string
}

export type LoginParamsType = {
	email: string
	password: string
	rememberMe: boolean
	captcha?: null | string
}

//common
export type CommonResponseType<T = {}> = {
	data: T
	messages: string[]
	fieldsErrors: string[]
	resultCode: number
}