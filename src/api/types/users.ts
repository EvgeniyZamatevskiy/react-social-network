import { Nullable } from 'types'
import { PhotosType } from './common'

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
