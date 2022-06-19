import { RootReducerType } from 'store/store'

export const getIsLoading = (state: RootReducerType): boolean => state.app.isLoading
export const getIsInitialized = (state: RootReducerType): boolean => state.app.isInitialized