import { instance } from './config'
import { LoginParamsType, MeResponseType } from './types/auth'
import { CommonResponseType } from './types/common'

export const AUTH = {
	login(loginParams: LoginParamsType) {
		return instance.post<CommonResponseType<{ userId: number }>>('auth/login', loginParams)
	},
	logout() {
		return instance.delete<CommonResponseType>('auth/login')
	},
	me() {
		return instance.get<CommonResponseType<MeResponseType>>('auth/me')
	}
}
