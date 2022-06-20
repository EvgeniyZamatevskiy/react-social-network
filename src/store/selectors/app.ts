import { RootReducerType } from 'store/store'

export const selectIsLoading = (state: RootReducerType): boolean => state.app.isLoading
export const selectIsInitialized = (state: RootReducerType): boolean => state.app.isInitialized