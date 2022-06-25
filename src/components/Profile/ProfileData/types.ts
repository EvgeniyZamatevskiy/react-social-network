import { UserProfileType } from 'api/types'
import { Nullable } from 'types'

export type ProfileDataPropsType = {
	userProfile: Nullable<UserProfileType>
	setEditProfile: (editProfile: boolean) => void
	isOwner: boolean
}
