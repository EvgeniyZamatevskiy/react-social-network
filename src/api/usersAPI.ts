import { instance } from './instance'

export const usersAPI = {
	getUsers(count: number, page: number) {
		return instance.get<GetUsersResponseType>(`users?count=${count}&page=${page}`)
	}
}

// users
export type GetUsersResponseType = {
	items: UsersType[]
	totalCount: number
	error: null | string
}

export type UsersType = {
	name: string
	id: number
	uniqueUrlName: null | string
	photos: PhotosType
	status: null | string
	followed: boolean
}

// common
export type PhotosType = {
	small: any
	large?: any
}