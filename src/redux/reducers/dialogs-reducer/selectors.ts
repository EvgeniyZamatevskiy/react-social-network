import { RootReducerType } from '../../store'

export const selectDialogs = (state: RootReducerType) => state.dialogs.dialogs
export const selectMessages = (state: RootReducerType) => state.dialogs.messages