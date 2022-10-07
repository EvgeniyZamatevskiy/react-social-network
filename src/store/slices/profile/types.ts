import { UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'

export type ProfileSliceInitialStateType = {
  userProfile: Nullable<UserProfileType>
  status: string
  isLoadingUserProfile: boolean
}
