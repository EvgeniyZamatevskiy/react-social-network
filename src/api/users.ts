import { Nullable } from 'types'
import { instance } from './config'

export const USERS = {
	getUsers() {
		return instance.get<UsersType>(`users?count=${9}&page=${2}`)
	}
}

export type UsersType = {
	error: Nullable<string>
	items: UserType[]
	totalCount: number
}

export type UserType = {
	followed: boolean
	id: number
	name: string
	photos: PhotosType
	status: string
	uniqueUrlName: Nullable<string>
}

export type PhotosType = {
	large: Nullable<string>
	small: Nullable<string>
}
