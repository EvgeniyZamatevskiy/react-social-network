import { AuthReducerActionsType } from './actions'

const initState = {
	id: null as number | null,
	login: null as string | null,
	email: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null
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