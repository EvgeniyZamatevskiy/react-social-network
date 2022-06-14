import { instance } from './instance'

export const authAPI = {
	me() {
		return instance.get<MeResponseType>('auth/me')
	}
}

// auth
export type MeResponseType = {
	data: UserDataType
	messages: string[]
	fieldsErrors: string[]
	resultCode: number
}

export type UserDataType = {
	id: number
	login: string
	email: string
}