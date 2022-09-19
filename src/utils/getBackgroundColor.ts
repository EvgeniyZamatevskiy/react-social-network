import { EMPTY_STRING } from 'constants/base'
import { ThemeType } from 'store/slices/app/types'

export const getBackgroundColor = (condition: boolean, theme: ThemeType, bgLight: string, bgDark: string): string => {
	let backgroundColor = EMPTY_STRING

	if (condition && theme === 'dark') {
		return backgroundColor = bgDark
	}

	if (condition && theme === 'light') {
		return backgroundColor = bgLight
	}

	return backgroundColor
}

// const getBackgroundColorTest = (condition: boolean): string => {
// 	let backgroundColor = ''

// 	if (condition && theme === 'dark') {
// 		return backgroundColor = '#3D3D3D'
// 	}

// 	if (condition && theme === 'light') {
// 		return backgroundColor = '#F2F3F5'
// 	}

// 	return backgroundColor
// }

// const getBackgroundColorTest2 = (condition: boolean): string => {
// 	let backgroundColor = ''

// 	if (condition && theme === 'dark') {
// 		return backgroundColor = '#333333'
// 	}

// 	if (condition && theme === 'light') {
// 		return backgroundColor = '#F5F6F8'
// 	}

// 	return backgroundColor
// }