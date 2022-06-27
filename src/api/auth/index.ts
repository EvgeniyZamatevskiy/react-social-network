import { instance } from 'api/config'
import { CommonResponseType } from 'api/types'
import { LoginParamsType, MeResponseType } from './types'

export const AUTH = {
	login(loginParams: LoginParamsType) {
		return instance.post<CommonResponseType<{ userId: number }>>('auth/login', loginParams)
	},
	logOut() {
		return instance.delete<CommonResponseType>('auth/login')
	},
	me() {
		return instance.get<CommonResponseType<MeResponseType>>('auth/me')
	}
}
