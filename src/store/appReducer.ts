import { Nullable } from 'types'

const initialState: InitialStateType = {
	error: null,
	isLoading: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'app/SET-ERROR':
			return { ...state, error: action.error }
		case 'app/SET-IS-LOADING':
			return { ...state, isLoading: action.isLoading }

		default:
			return state
	}
}

// ActionCreators
export const setErrorAC = (error: Nullable<string>) => ({ type: 'app/SET-ERROR', error } as const)

export const setIsLoadingAC = (isLoading: boolean) => ({ type: 'app/SET-IS-LOADING', isLoading } as const)

//types
export type InitialStateType = {
	error: Nullable<string>
	isLoading: boolean
}

export type AppReducerActionsType = ReturnType<typeof setErrorAC> | ReturnType<typeof setIsLoadingAC>
