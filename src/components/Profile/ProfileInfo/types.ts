import { UserProfileType } from 'api/types'
import { Nullable } from 'types'

export type ProfileInfoPropsType = {
	userProfile: Nullable<UserProfileType>
	isOwner: boolean
}
