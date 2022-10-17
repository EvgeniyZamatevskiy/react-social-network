export type AppSliceInitialStateType = {
  theme: ThemeType
  errorMessage: string
  isLoading: boolean
  isInitializedApp: boolean
  isDisabled: boolean
}

export enum Theme {
  DEFAULT = "light",
  DARK = "dark"
}

export type ThemeType = "dark" | "light"
