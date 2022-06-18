import { CommonResponseType } from './apiAuth/types'
import { axiosConfig } from './apiConfig'
import { PhotosType } from './usersAPI'

export const profileAPI = {
	getUserProfile(userId: number) {
		return axiosConfig.get<UserProfileResponseType>(`profile/${userId}`)
	},
	getStatus(userId: number) {
		return axiosConfig.get<string>(`profile/status/${userId}`)
	},
	updateUserStatus(newStatus: string) {
		return axiosConfig.put<CommonResponseType>(`profile/status`, { status: newStatus })
	},
	savePhoto(file: File) {
		const formData = new FormData()
		formData.append('image', file)
		return axiosConfig.put<CommonResponseType<SavePhotoResponseDataType>>('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile(profile: UserProfileResponseType) {
		return axiosConfig.put<CommonResponseType>('profile', profile)
	}
}

// profile
export type UserProfileResponseType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType
	photos: PhotosType
	aboutMe: string
}

export type ContactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}

export type SavePhotoResponseDataType = {
	photos: PhotosType
}