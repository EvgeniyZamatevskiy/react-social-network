import {useSelector} from "react-redux"
import {selectTheme} from "store/selectors"
import {Theme} from "store/slices/app/types"

export const useTheme = (themeColor: Theme): boolean => {

  const theme = useSelector(selectTheme)

  return theme === themeColor
}
