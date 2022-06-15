import { CommonResponseType } from './authAPI'
import { instance } from './instance'

export const followAPI = {
	follow(userId: number) {
		return instance.post<CommonResponseType>(`follow/${userId}`)
	},
	unFollow(userId: number) {
		return instance.delete<CommonResponseType>(`follow/${userId}`)
	}
}