import { RootStateType } from 'store'
import { UserProfileType } from 'api/profile/types'

export const selectUserProfile = (state: RootStateType): UserProfileType => state.profile.userProfile
