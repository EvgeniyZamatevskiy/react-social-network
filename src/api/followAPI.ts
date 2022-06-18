import { CommonResponseType } from './apiAuth/types'
import { axiosConfig } from './apiConfig'

export const followAPI = {
	follow(userId: number) {
		return axiosConfig.post<CommonResponseType>(`follow/${userId}`)
	},
	unFollow(userId: number) {
		return axiosConfig.delete<CommonResponseType>(`follow/${userId}`)
	}
}