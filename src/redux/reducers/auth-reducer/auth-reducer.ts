import { AuthReducerActionsType } from './actions'

const initState: InitStateType = {
	id: null,
	login: null,
	email: null,
	isAuth: false
}

export const authReducer = (state: InitStateType = initState, action: AuthReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'SET-USER-DATA':
			return { ...state, ...action.userData, isAuth: true }

		default:
			return state
	}
}

// types
type InitStateType = {
	id: null | number
	login: null | string
	email: null | string
	isAuth: boolean
}