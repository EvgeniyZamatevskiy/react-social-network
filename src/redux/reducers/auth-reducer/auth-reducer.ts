import { AuthReducerActionsType } from './actions'

const initState: InitStateType = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	captchaUrl: null
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
type InitStateType = {
	id: null | number
	login: null | string
	email: null | string
	isAuth: boolean,
	captchaUrl: string | null
}