import { ResultCodes, ResultCodeForCaptcha } from 'api/enums'

// auth
export type MeResponseDataType = {
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
