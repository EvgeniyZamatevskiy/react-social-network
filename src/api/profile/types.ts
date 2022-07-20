import { PhotosType } from '../types'

export type UserProfileType = {
	aboutMe: string
	contacts: ContactsType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	photos: PhotosType
	userId: number
}

export type ContactsType = {
	facebook: string
	github: string
	instagram: string
	mainLink: string
	twitter: string
	vk: string
	website: string
	youtube: string
}

export type SavePhotoResponseDataType = {
	photos: PhotosType
}
