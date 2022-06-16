import { CommonResponseType } from './authAPI'
import { instance } from './instance'
import { PhotosType } from './usersAPI'

export const profileAPI = {
	getUserProfile(userId: string) {
		return instance.get<UserProfileResponseType>(`profile/${userId}`)
	},
	getStatus(userId: number) {
		return instance.get<any>(`profile/status/${userId}`) // string
	},
	updateUserStatus(newStatus: string) {
		return instance.put<CommonResponseType>(`profile/status`, { status: newStatus })
	},
	savePhoto(file: File) {
		const formData = new FormData()
		formData.append('image', file)
		return instance.put<CommonResponseType<PhotosType>>('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile(profile: any) {
		return instance.put<CommonResponseType>('profile', profile)
	}
}

// profile
export type UserProfileResponseType = {
	aboutMe?: null | string
	contacts?: any
	lookingForAJob?: boolean
	lookingForAJobDescription?: null | string
	fullName?: string
	userId?: number
	photos: PhotosType
}

export type ContactsType = {
	facebook: null | string
	website: null | string
	vk: null | string
	twitter: null | string
	instagram: null | string
	youtube: null | string
	github: null | string
	mainLink: null | string
}