import { instance } from './instance'

export const usersAPI = {
	getUsers(count: number, page: number, term: string, friend: null | boolean = null) {
		return instance.get<GetUsersResponseType>(`users?count=${count}&page=${page}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
	}
}

// types
export type GetUsersResponseType = {
	items: UsersType[]
	totalCount: number
	error: null | string
}

export type UsersType = {
	name: string
	id: number
	photos: PhotosType
	status: string
	followed: boolean
}

export type PhotosType = {
	small: string | null
	large: string | null
}