export const setUserDataAC = (userData: UserDataType, isAuth: boolean) => ({ type: 'SET-USER-DATA', userData, isAuth } as const)

export const toggleIsAuthAC = (isAuth: boolean) => ({ type: 'TOGGLE-IS-AUTH', isAuth } as const)

export const getCaptchaUrlAC = (captchaUrl: string) => ({ type: 'GET-CAPTCHA-URL', captchaUrl } as const)

export const authActions = {
	setUserDataAC,
	toggleIsAuthAC,
	getCaptchaUrlAC
}

// types
type UserDataType = {
	id: number | null,
	email: string | null
	login: string | null
}