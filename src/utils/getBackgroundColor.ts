import {EMPTY_STRING} from "constants/base"
import {Theme} from "store/slices/app/types"

export const getBackgroundColor = (condition: boolean, theme: Theme, bgLight: string, bgDark: string): string => {
  let backgroundColor = EMPTY_STRING

  if (condition && theme === Theme.DARK) {
    backgroundColor = bgDark
  }

  if (condition && theme === Theme.DEFAULT) {
    backgroundColor = bgLight
  }

  return backgroundColor
}
