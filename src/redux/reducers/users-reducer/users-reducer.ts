import { UsersType } from '../../../api/usersAPI'
import { UsersReducerActionsType } from './actions'

const initState: InitStateType = {
	users: []
}

export const usersReducer = (state: InitStateType = initState, action: UsersReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'TOGGLE-FOLLOWED':
			return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u) }
		case 'GET-USERS':
			return { ...state, users: action.users }

		default:
			return state
	}
}

// types
type InitStateType = {
	users: UsersType[]
}