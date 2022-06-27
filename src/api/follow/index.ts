import { instance } from 'api/config'
import { CommonResponseType } from 'api/types'

export const FOLLOW = {
	follow(userId: number) {
		return instance.post<CommonResponseType>(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete<CommonResponseType>(`follow/${userId}`)
	}
}
