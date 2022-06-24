import { UserType } from 'api/types'
import { USERS } from 'api/users'
import { Nullable } from 'types'
import { ThunkType } from './store'

const initialState: InitialStateType = {
	users: [],
	count: 9,
	page: 1,
	totalCount: 0,
	filter: { term: '', friend: null }
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'users/SET-USERS':
			return { ...state, users: action.users }
		case 'users/SET-TOTAL-COUNT':
			return { ...state, totalCount: action.totalCount }
		case 'users/SET-CURRENT-PAGE':
			return { ...state, page: action.currentPage }
		case 'users/SET-FILTER':
			return { ...state, filter: action.payload }

		default:
			return state
	}
}

// actionsCreators
export const setUsersAC = (users: UserType[]) => ({ type: 'users/SET-USERS', users } as const)

export const setTotalCountAC = (totalCount: number) => ({ type: 'users/SET-TOTAL-COUNT', totalCount } as const)

export const setCurrentPageAC = (currentPage: number) => ({ type: 'users/SET-CURRENT-PAGE', currentPage } as const)

export const setFilterAC = (filter: FilterType) => ({ type: 'users/SET-FILTER', payload: filter } as const)

export const getUsersTC = (count: number, page: number, filter: FilterType): ThunkType => async (dispatch) => {
	try {
		const response = await USERS.getUsers(count, page, filter)
		const { items: users, totalCount } = response.data

		dispatch(setUsersAC(users))
		dispatch(setTotalCountAC(totalCount))
		dispatch(setCurrentPageAC(page))
		dispatch(setFilterAC(filter))
	} catch (error: any) {
		alert(error.message)
	}
}

// types
export type InitialStateType = {
	users: UserType[]
	count: number
	page: number
	totalCount: number
	filter: FilterType
}

export type FilterType = {
	term: string
	friend: Nullable<boolean>
}

export type UsersReducerActionsType =
	ReturnType<typeof setUsersAC> |
	ReturnType<typeof setTotalCountAC> |
	ReturnType<typeof setCurrentPageAC> |
	ReturnType<typeof setFilterAC> 
