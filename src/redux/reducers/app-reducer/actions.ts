import { InferActionsTypes, ThunkType } from '../../store'
import { getUserDataTC } from '../auth-reducer/actions'

// ActionCreators
export const toggleIsLoadingAC = (isLoading: boolean) => ({ type: 'TOGGLE-IS-LOADING', isLoading } as const)

export const setAppIsInitializedAC = (isInitialized: boolean) => ({ type: 'SET-IS-INITIALIZED', isInitialized } as const)

// ThunkCreators
export const initializeAppTC = (): ThunkType => (dispatch) => {
	let promise = dispatch(getUserDataTC())

	Promise.all([promise]).then(() => {
		dispatch(setAppIsInitializedAC(true))
	})
}

export const appAsyncActions = {
	initializeAppTC
}

export const appActions = {
	toggleIsLoadingAC,
	setAppIsInitializedAC
}

// types
export type AppReducerActionsType = InferActionsTypes<typeof appActions>