import { instance } from '../config'
import { UserProfileType } from './types'

export const PROFILE = {
  getUserProfile(userId: number) {
    return instance.get<UserProfileType>(`profile/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put('profile/status', {status})
  },
}
