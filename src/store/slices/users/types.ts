import { UserType } from 'api/users/types'
import { Nullable } from 'types'

export type UsersSliceInitialStateType = {
	users: UsersSupplementedType[]
	count: number
	page: number
	totalCount: number
	filter: FilterType
}

export type UsersSupplementedType = UserType & {
	isDisabled: boolean
}

export type FilterType = {
	term: string
	friend: Nullable<boolean>
}
