import { UsersType } from '../../../api/usersAPI'
import { UsersReducerActionsType } from './actions'

const initState: InitStateType = {
	users: [],
	count: 5,
	page: 1,
	totalUsersCount: 0
}

export const usersReducer = (state: InitStateType = initState, action: UsersReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'TOGGLE-FOLLOWED':
			return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u) }
		case 'GET-USERS':
			return { ...state, users: action.users }
		case 'SET-CURRENT-PAGE':
			return { ...state, page: action.currentPage }
		case 'SET-TOTAL-USERS-COUNT':
			return { ...state, totalUsersCount: action.totalUsersCount }

		default:
			return state
	}
}

// types
type InitStateType = {
	users: UsersType[]
	count: number
	page: number
	totalUsersCount: number
}