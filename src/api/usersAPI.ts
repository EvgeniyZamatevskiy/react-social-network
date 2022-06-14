import { instance } from './instance'

export const usersAPI = {
	getUsers() {
		return instance.get<GetUsersResponseType>('users')
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

export type PhotosType = {
	small: null | string
	large: null | string
}