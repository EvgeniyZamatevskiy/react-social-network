import { axiosConfig } from './apiConfig'

export const securityAPI = {
	getCaptchaUrl() {
		return axiosConfig.get<SecurityResponseType>('security/get-captcha-url')
	}
}

export type SecurityResponseType = {
	url: string
}
