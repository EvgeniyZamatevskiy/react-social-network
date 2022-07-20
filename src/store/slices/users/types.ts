import { UserType } from 'api/users/types'
import { Nullable } from 'types'

export type InitialStateType = {
	users: UsersSupplementedType[]
	count: number
	page: number
	totalCount: number
	filter: FilterType
}

export type UsersSupplementedType = UserType & {
	disabledStatus: boolean
}

export type FilterType = {
	term: string
	friend: Nullable<boolean>
}
