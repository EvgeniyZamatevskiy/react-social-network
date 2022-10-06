import { UserProfileType } from 'api/profile/types'

export type ProfileSliceInitialStateType = {
  userProfile: UserProfileType
  status: string
  isLoadingStatus: boolean
  isLoadingUserProfile: boolean
}
