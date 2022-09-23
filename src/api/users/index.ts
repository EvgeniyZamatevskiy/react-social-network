import { instance } from 'api/config'
import { CommonResponseType } from 'api/types'
import { UsersResponseType } from './types'

export const USERS = {
	getUsers() {
		return instance.get<UsersResponseType>('users')
	},
	follow(userId: number) {
		return instance.post<CommonResponseType>(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete<CommonResponseType>(`follow/${userId}`)
	},
}
