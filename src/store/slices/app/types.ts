export type AppSliceInitialStateType = {
  theme: ThemeType
  errorMessage: string
  isLoading: boolean
  isInitializedApp: boolean
  isDisabled: boolean
}

export type ThemeType = 'dark' | 'light'
