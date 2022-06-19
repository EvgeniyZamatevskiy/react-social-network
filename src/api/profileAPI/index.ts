import { axiosInstance } from 'api/config'
import { CommonResponseType } from 'api/types'
import { UserProfileResponseType, SavePhotoResponseDataType } from './types'

export const profileAPI = {
	async getUserProfile(userId: number) {
		const res = await axiosInstance.get<UserProfileResponseType>(`profile/${userId}`)
		return res.data
	},
	async getStatus(userId: number) {
		const res = await axiosInstance.get<string>(`profile/status/${userId}`)
		return res.data
	},
	async updateUserStatus(status: string) {
		const res = await axiosInstance.put<CommonResponseType>(`profile/status`, { status })
		return res.data
	},
	async savePhoto(file: File) {
		const formData = new FormData()
		formData.append('image', file)
		const res = await axiosInstance.put<CommonResponseType<SavePhotoResponseDataType>>('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return res.data
	},
	async saveProfile(profile: UserProfileResponseType) {
		const res = await axiosInstance.put<CommonResponseType>('profile', profile)
		return res.data
	}
}