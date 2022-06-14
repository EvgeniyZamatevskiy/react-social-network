import { ThunkType } from '../../store'

// ActionCreators
export const toggleIsLoadingAC = (isLoading: boolean) => ({ type: 'TOGGLE-IS-LOADING', isLoading } as const)

export const setAppIsInitializedAC = (isInitialized: boolean) => ({ type: 'SET-IS-INITIALIZED', isInitialized } as const)


// ThunkCreators
export const TC = (): ThunkType => async (dispatch) => {

}

export const appAsyncActions = {

}

export const appActions = {
	toggleIsLoadingAC,
	setAppIsInitializedAC
}

// types
export type AppReducerActionsType = ToggleIsLoadingActionType | SetAppIsInitializedActionType

type ToggleIsLoadingActionType = ReturnType<typeof toggleIsLoadingAC>
type SetAppIsInitializedActionType = ReturnType<typeof setAppIsInitializedAC>