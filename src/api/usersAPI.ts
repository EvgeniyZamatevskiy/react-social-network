import { EMPTY_STRING } from '../constants'
import { axiosConfig } from './apiConfig'

export const usersAPI = {
	getUsers(count: number, page: number, term: string, friend: null | boolean = null) {
		return axiosConfig.get<GetUsersResponseType>(`users?count=${count}&page=${page}&term=${term}` + (friend === null ? EMPTY_STRING : `&friend=${friend}`))
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
