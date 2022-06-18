import { InferActionsTypes, ThunkType } from '../../store'

// ActionCreators
export const sendMessageAC = (message: string) => ({ type: 'SEND-MESSAGE', message } as const)

// ThunkCreators
export const TC = (): ThunkType => async (dispatch) => {

}

export const dialogsAsyncActions = {

}

export const dialogsActions = {
	sendMessageAC
}

// types
export type DialogsReducerActionsType = InferActionsTypes<typeof dialogsActions>