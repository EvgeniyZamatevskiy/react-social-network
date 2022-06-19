import { PhotosType } from "api/types"

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