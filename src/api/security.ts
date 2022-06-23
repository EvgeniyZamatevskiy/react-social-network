import { instance } from './config'

export const SECURITY = {
	getCaptcha() {
		return instance.get<{ url: string }>('security/get-captcha-url')
	}
}
