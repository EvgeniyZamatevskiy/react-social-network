import { axiosInstance } from 'api/config'
import { EMPTY_STRING } from '../../constants'
import { GetUsersResponseType } from './types'

export const usersAPI = {
	async getUsers(count: number, page: number, term: string, friend: null | boolean = null) {
		const res = await axiosInstance.get<GetUsersResponseType>(`users?count=${count}&page=${page}&term=${term}`
			+ (friend === null ? EMPTY_STRING : `&friend=${friend}`))
		return res.data
	}
}