import { EMPTY_STRING } from 'constants/base'
import { InitialStateType, UsersReducerActionsType } from './types'

const initialState: InitialStateType = {
	users: [],
	count: 9,
	page: 1,
	totalCount: 0,
	filter: { term: EMPTY_STRING, friend: null }
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'users/SET-USERS':
			return { ...state, users: action.users.map(user => ({ ...user, disabledStatus: false })) }
		case 'users/SET-TOTAL-COUNT':
			return { ...state, totalCount: action.totalCount }
		case 'users/SET-PAGE':
			return { ...state, page: action.page }
		case 'users/SET-FILTER':
			return { ...state, filter: action.payload }
		case 'users/FOLLOW':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user) }
		case 'users/UNFOLLOW':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user) }
		case 'users/SET-DISABLED-STATUS':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, disabledStatus: action.isDisabled } : user) }

		default:
			return state
	}
}
