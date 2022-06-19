import { DialogsType, MessagesType } from 'store/reducers/dialogsReducer'
import { RootReducerType } from 'store/store'

export const getDialogs = (state: RootReducerType): DialogsType[] => state.dialogs.dialogs
export const getMessages = (state: RootReducerType): MessagesType[] => state.dialogs.messages