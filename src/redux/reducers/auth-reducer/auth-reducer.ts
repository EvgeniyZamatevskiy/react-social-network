import { Nullable } from 'types/Nullable'
import { InferActionsTypes } from '../../store'
import { authActions } from './actions'

const initState = {
	id: null as Nullable<number>,
	login: null as Nullable<string>,
	email: null as Nullable<string>,
	isAuth: false,
	captchaUrl: null as Nullable<string>
}

export const authReducer = (state: InitStateType = initState, action: AuthReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'SET-USER-DATA':
			return { ...state, ...action.userData, isAuth: action.isAuth }
		case 'TOGGLE-IS-AUTH':
			return { ...state, isAuth: action.isAuth }
		case 'GET-CAPTCHA-URL':
			return { ...state, captchaUrl: action.captchaUrl }

		default:
			return state
	}
}

// types
type InitStateType = typeof initState
type AuthReducerActionsType = InferActionsTypes<typeof authActions>