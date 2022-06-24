import { EMPTY_STRING } from 'constants/base'
import { FilterType } from 'store/usersReducer'
import { instance } from './config'
import { UsersType } from './types'

export const USERS = {
	getUsers(count: number, page: number, filter: FilterType) {
		return instance.get<UsersType>
			(`users?count=${count}&page=${page}&term=${filter.term}${filter.friend === null ? EMPTY_STRING : `&friend=${filter.friend}`}`)
	}
}
