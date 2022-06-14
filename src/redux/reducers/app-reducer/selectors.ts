import { RootReducerType } from '../../store'

export const selectIsLoading = (state: RootReducerType) => state.app.isLoading
export const selectIsInitialized = (state: RootReducerType) => state.app.isInitialized