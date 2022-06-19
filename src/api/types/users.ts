import { PhotosType } from "./common"

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