import { AppReducerActionsType } from './actions'

const initState: InitStateType = {
	isLoading: false
}

export const appReducer = (state: InitStateType = initState, action: AppReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'TOGGLE-IS-LOADING':
			return { ...state, isLoading: action.isLoading }

		default:
			return state
	}
}

// types
type InitStateType = {
	isLoading: boolean
}