import { instance } from '../config'

export const PROFILE = {
  updateStatus(status: string) {
    return instance.put('profile/status', {status})
  }
}
