import { axiosInstance } from './config'
import { SecurityResponseType } from './types'

export const securityAPI = {
	async getCaptchaUrl() {
		const res = await axiosInstance.get<SecurityResponseType>('security/get-captcha-url')
		return res.data
	}
}