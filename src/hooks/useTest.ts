import {useSelector} from "react-redux"
import {selectTheme} from "store/selectors"
import {EMPTY_STRING} from "constants/base"

export const useTest = (end: string): string => {
  const theme = useSelector(selectTheme)

  if (theme !== "light") {
    return theme + end
  } else {
    return EMPTY_STRING
  }
}
