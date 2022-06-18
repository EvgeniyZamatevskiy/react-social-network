import { axiosConfig } from '../apiConfig'
import { CommonResponseType, MeResponseDataType, LoginParamsType } from './types'

export const authAPI = {
	async me() {
		const res = await axiosConfig.get<CommonResponseType<MeResponseDataType>>('auth/me')
		return res.data
	},
	login(loginParams: LoginParamsType) {
		return axiosConfig.post<CommonResponseType<{ userId: number }>>('auth/login', loginParams)
	},
	logout() {
		return axiosConfig.delete<CommonResponseType>('auth/login')
	}
}