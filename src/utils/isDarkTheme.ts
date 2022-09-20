import { ThemeType } from 'store/slices/app/types'

export const isDarkTheme = (theme: ThemeType): boolean => theme === 'dark'
