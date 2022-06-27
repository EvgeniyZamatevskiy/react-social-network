import { instance } from 'api/config'

export const SECURITY = {
	getCaptcha() {
		return instance.get<{ url: string }>('security/get-captcha-url')
	}
}
