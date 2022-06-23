export type LoginParamsType = {
	email: string,
	password: string,
	rememberMe: boolean,
	captcha?: string
}

export type MeResponseType = {
	id: number
	login: string
	email: string
}
