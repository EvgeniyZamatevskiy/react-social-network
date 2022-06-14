import { ThunkType } from '../../store'

// ActionCreators
export const addPostAC = (postTitle: string) => ({ type: 'ADD-POST', postTitle } as const)

// ThunkCreators
export const TC = (): ThunkType => async (dispatch) => {

}

export const profileAsyncActions = {

}

export const profileActions = {
	addPostAC
}

// types
export type ProfileReducerActionsType = AddPostActionType

type AddPostActionType = ReturnType<typeof addPostAC>