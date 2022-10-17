export type AppSliceInitialStateType = {
  theme: Theme
  errorMessage: string
  isLoading: boolean
  isInitializedApp: boolean
  isDisabled: boolean
}

export enum Theme {
  DEFAULT = "light",
  DARK = "dark"
}
