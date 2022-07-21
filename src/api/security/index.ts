import { instance } from 'api/config'

export const SECURITY = {
	getCaptchaUrl() {
		return instance.get<{ url: string }>('security/get-captcha-url')
	}
}
