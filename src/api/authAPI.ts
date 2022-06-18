import { ResultCodeForCaptcha, ResultCodes } from '../enums/enums'
import { instance } from './instance'

export const authAPI = {
	async me() {
		const res = await instance.get<CommonResponseType<MeResponseDataType>>('auth/me')
		return res.data
	},
	login(loginParams: LoginParamsType) {
		return instance.post<CommonResponseType<{ userId: number }>>('auth/login', loginParams)
	},
	logout() {
		return instance.delete<CommonResponseType>('auth/login')
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
	captcha: string | null
}

//common
export type CommonResponseType<T = {}> = {
	data: T
	messages: string[]
	fieldsErrors: string[]
	resultCode: ResultCodes | ResultCodeForCaptcha
}