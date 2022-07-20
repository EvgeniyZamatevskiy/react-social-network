import { RootStateType } from 'store'

export const selectErrorMessage = (state: RootStateType): string => state.app.errorMessage

export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading
