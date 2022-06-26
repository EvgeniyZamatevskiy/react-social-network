import { Nullable } from 'types'

const initialState: InitialStateType = {
	error: null
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'app/SET-ERROR':
			return { ...state, error: action.error }

		default:
			return state
	}
}

// ActionCreators
export const setErrorAC = (error: Nullable<string>) => ({ type: 'app/SET-ERROR', error } as const)

//types
export type InitialStateType = {
	error: Nullable<string>
}

export type AppReducerActionsType = ReturnType<typeof setErrorAC> 
