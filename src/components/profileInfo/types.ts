import { UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'

export type ProfileInfoPropsType = {
	userProfile: Nullable<UserProfileType>
	isOwner: boolean
}
