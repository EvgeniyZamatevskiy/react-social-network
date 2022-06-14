import { ThunkType } from '../../store'

// ActionCreators
export const toggleIsLoadingAC = (isLoading: boolean) => ({ type: 'TOGGLE-IS-LOADING', isLoading } as const)

// ThunkCreators
export const TC = (): ThunkType => async (dispatch) => {

}

export const appAsyncActions = {

}

export const appActions = {
	toggleIsLoadingAC
}

// types
export type AppReducerActionsType = ToggleIsLoadingActionType

type ToggleIsLoadingActionType = ReturnType<typeof toggleIsLoadingAC>