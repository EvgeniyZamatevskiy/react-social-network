import { EMPTY_STRING } from 'constants/base'
import { ThemeType } from 'store/slices/app/types'

export const getBackgroundColor = (condition: boolean, theme: ThemeType, bgLight: string, bgDark: string): string => {
  let backgroundColor = EMPTY_STRING

  if (condition && theme === 'dark') {
    backgroundColor = bgDark
  }

  if (condition && theme === 'light') {
    backgroundColor = bgLight
  }

  return backgroundColor
}
