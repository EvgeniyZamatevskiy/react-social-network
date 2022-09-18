import { EMPTY_STRING } from 'constants/base'
import { ThemeType } from 'store/slices/app/types'

export const getBackgroundColor = (condition: boolean, theme: ThemeType): string => {
	let backgroundColor = EMPTY_STRING

	if (condition && theme === 'dark') {
		backgroundColor = '#333333'
	}

	if (condition && theme === 'light') {
		backgroundColor = '#F5F6F8'
	}

	return backgroundColor
}
