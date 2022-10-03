import { instance } from '../config'
import { UserProfileType } from './types'
import { CommonResponseType, PhotoType } from '../types'

const settings = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

export const PROFILE = {
  getUserProfile(userId: number) {
    return instance.get<UserProfileType>(`profile/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put<CommonResponseType>('profile/status', {status})
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
  },
  updatePhoto(image: File) {
    const formData = new FormData()
    formData.append('image', image)

    return instance.put<CommonResponseType<{ photos: PhotoType }>>('profile/photo', formData, settings)
  },
}
