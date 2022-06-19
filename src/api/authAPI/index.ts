import { MeResponseDataType, LoginParamsType } from 'api/authAPI/types'
import { axiosInstance } from 'api/config'
import { CommonResponseType } from 'api/types'


export const authAPI = {
	async me() {
		const res = await axiosInstance.get<CommonResponseType<MeResponseDataType>>('auth/me')
		return res.data
	},
	async login(loginParams: LoginParamsType) {
		const res = await axiosInstance.post<CommonResponseType<{ userId: number }>>('auth/login', loginParams)
		return res.data
	},
	async logout() {
		const res = await axiosInstance.delete<CommonResponseType>('auth/login')
		return res.data
	}
}