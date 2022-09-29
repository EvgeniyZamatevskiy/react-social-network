import { useSelector } from 'react-redux'
import { selectTheme } from 'store/selectors'
import { ThemeType } from 'store/slices/app/types'

export const useTheme = (themeColor: ThemeType): boolean => {

  const theme = useSelector(selectTheme)

  return theme === themeColor
}
