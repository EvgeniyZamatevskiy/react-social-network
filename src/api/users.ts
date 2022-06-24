import { FilterType } from 'store/usersReducer'
import { instance } from './config'
import { UsersType } from './types/users'

export const USERS = {
	getUsers(count: number, page: number, filter: FilterType) {
		return instance.get<UsersType>(`users?count=${count}&page=${page}&term=${filter.term}&friend=${filter.friend}`
		)
	}
}
