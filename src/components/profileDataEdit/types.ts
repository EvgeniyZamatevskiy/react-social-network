import { UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'

export type ProfileDataEditPropsType = {
	userProfile: Nullable<UserProfileType>
	setEditProfile: (editProfile: boolean) => void
	editProfile: boolean
}
