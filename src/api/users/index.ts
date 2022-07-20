import { instance } from 'api/config'
import { EMPTY_STRING } from 'constants/base'
import { FilterType } from 'store/slices/users/types'
import { UsersType } from './types'

export const USERS = {
	getUsers(count: number, page: number, filter: FilterType) {

		const friend = filter.friend === null ? EMPTY_STRING : `&friend=${filter.friend}`
		const term = !filter.term.length ? EMPTY_STRING : `&term=${filter.term}`

		return instance.get<UsersType>(`users?count=${count}&page=${page}${term}${friend}`)
	}
}
