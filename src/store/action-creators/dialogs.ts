import { InferActionsTypes } from "store/store"

export const sendMessageAC = (message: string) => ({ type: 'SEND-MESSAGE', message } as const)

export const dialogsActions = {
	sendMessageAC
}

// types
export type DialogsReducerActionsType = InferActionsTypes<typeof dialogsActions>