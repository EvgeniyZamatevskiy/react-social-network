export type AppSliceInitialStateType = {
	theme: ThemeType
	errorMessage: string
	isLoading: boolean
	isInitializedApp: boolean
}

export type ThemeType = 'dark' | 'light'
