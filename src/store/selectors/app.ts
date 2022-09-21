import { RootStateType } from 'store'
import { ThemeType } from 'store/slices/app/types'

export const selectTheme = (state: RootStateType): ThemeType => state.app.theme

export const selectErrorMessage = (state: RootStateType): string => state.app.errorMessage

export const selectIsInitializedApp = (state: RootStateType): boolean => state.app.isInitializedApp

export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading

export const selectIsDisabled = (state: RootStateType): boolean => state.app.isDisabled
