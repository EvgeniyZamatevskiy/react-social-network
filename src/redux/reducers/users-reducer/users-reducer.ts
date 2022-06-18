import { UsersType } from '../../../api/usersAPI'
import { UsersReducerActionsType } from './actions'

const initState = {
	users: [] as UsersSupplementedType[],
	count: 10,
	page: 1,
	totalUsersCount: 0,
	filter: { term: '', friend: null as boolean | null }
}

export const usersReducer = (state: InitStateType = initState, action: UsersReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'FOLLOW':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user) }
		case 'UN-FOLLOW':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user) }
		case 'SET-USERS':
			return { ...state, users: action.users.map(user => ({ ...user, disabledStatus: false })) }
		case 'SET-CURRENT-PAGE':
			return { ...state, page: action.currentPage }
		case 'SET-FILTER':
			return { ...state, filter: action.payload }
		case 'SET-TOTAL-USERS-COUNT':
			return { ...state, totalUsersCount: action.totalUsersCount }
		case 'TOGGLE-DISABLED-STATUS':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, disabledStatus: action.isDisabled } : user) }

		default:
			return state
	}
}

// types
type InitStateType = typeof initState

export type UsersSupplementedType = UsersType & {
	disabledStatus: boolean
}