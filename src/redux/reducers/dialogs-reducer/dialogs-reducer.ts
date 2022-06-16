import { DialogsReducerActionsType } from './actions'

const initState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrew' },
		{ id: 3, name: 'Sveta' },
	] as DialogsType[],

	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your it-kamasutra?' },
		{ id: 3, message: 'Yo' },
	] as MessagesType[],
}

export const dialogsReducer = (state: InitStateType = initState, action: DialogsReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'SEND-MESSAGE':
			const newMessage = { id: Date.now(), message: action.message }
			return { ...state, messages: [...state.messages, newMessage] }

		default:
			return state
	}
}

// types
export type InitStateType = typeof initState


export type DialogsType = {
	id: number
	name: string
}

export type MessagesType = {
	id: number
	message: string
}