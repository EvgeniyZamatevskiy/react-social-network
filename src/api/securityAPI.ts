import { instance } from './instance'

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get<SecurityResponseType>('security/get-captcha-url')
	}
}

export type SecurityResponseType = {
	url: string
}