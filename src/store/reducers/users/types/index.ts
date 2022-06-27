import { UserType } from 'api/users/types'
import { setUsersAC, setTotalCountAC, setPageAC, setFilterAC, followAC, unfollowAC, setDisabledStatusAC } from 'store/actions/users'
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

export type UsersReducerActionsType =
	ReturnType<typeof setUsersAC> |
	ReturnType<typeof setTotalCountAC> |
	ReturnType<typeof setPageAC> |
	ReturnType<typeof setFilterAC> |
	ReturnType<typeof followAC> |
	ReturnType<typeof unfollowAC> |
	ReturnType<typeof setDisabledStatusAC> 
