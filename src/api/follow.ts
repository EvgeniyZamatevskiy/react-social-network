import { instance } from './config'
import { CommonResponseType } from './types'

export const FOLLOW = {
	follow(userId: number) {
		return instance.post<CommonResponseType>(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete<CommonResponseType>(`follow/${userId}`)
	}
}
