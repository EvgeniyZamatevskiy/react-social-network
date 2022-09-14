import { UserType } from 'api/users/types'
import { Nullable } from 'types'

export type UsersSliceInitialStateType = {
	users: UserType[]
	count: number
	page: number
	totalCount: number
	disabledUserId: number[]
	filter: FilterType
}

export type FilterType = {
	term: string
	friend: Nullable<boolean>
}
