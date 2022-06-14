import { instance } from './instance'

export const followAPI = {
	follow(userId: number) {
		return instance.post<FollowResponseType>(`follow/${userId}`)
	},
	unFollow(userId: number) {
		return instance.delete<FollowResponseType>(`follow/${userId}`)
	}
}

export type FollowResponseType = {
	data: {}
	fieldsErrors: string[]
	messages: string[]
	resultCode: number
}