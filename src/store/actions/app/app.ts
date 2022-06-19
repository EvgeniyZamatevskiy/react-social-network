import { InferActionsTypes } from 'store/store'

// ActionCreators
export const toggleIsLoadingAC = (isLoading: boolean) => ({ type: 'TOGGLE-IS-LOADING', isLoading } as const)

export const setAppIsInitializedAC = (isInitialized: boolean) => ({ type: 'SET-IS-INITIALIZED', isInitialized } as const)

export const appActions = {
	toggleIsLoadingAC,
	setAppIsInitializedAC
}

// types
export type AppReducerActionsType = InferActionsTypes<typeof appActions>