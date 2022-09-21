import { RootStateType } from 'store'
import { ThemeType } from 'store/slices/app/types'

export const selectTheme = (state: RootStateType): ThemeType => state.app.theme

export const selectErrorMessage = (state: RootStateType): string => state.app.errorMessage
