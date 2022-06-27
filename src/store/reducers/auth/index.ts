import { InitialStateType, AuthReducerActionsType } from './types'

const initialState: InitialStateType = {
	isAuth: false,
	isInitialized: false,
	email: null,
	id: null,
	login: null,
	captchaUrl: null
}

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'auth/SET-IS-AUTH':
			return { ...state, isAuth: action.isAuth }
		case 'auth/SET-USER-DATA':
			return { ...state, ...action.userData }
		case 'auth/SET-IS-INITIALIZED-APP':
			return { ...state, isInitialized: action.isInitialized }
		case 'auth/SET-CAPTCHA-URL':
			return { ...state, captchaUrl: action.captchaUrl }

		default:
			return state
	}
}
