import { axiosInstance } from 'api/config'
import { SecurityResponseType } from './types'

export const SECURITY = {
	async getCaptchaUrl() {
		const res = await axiosInstance.get<SecurityResponseType>('security/get-captcha-url')
		return res.data
	}
}