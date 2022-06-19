import { axiosInstance } from './config'
import { CommonResponseType } from './types/common'

export const followAPI = {
	async follow(userId: number) {
		const res = await axiosInstance.post<CommonResponseType>(`follow/${userId}`)
		return res.data
	},
	async unFollow(userId: number) {
		const res = await axiosInstance.delete<CommonResponseType>(`follow/${userId}`)
		return res.data
	}
}