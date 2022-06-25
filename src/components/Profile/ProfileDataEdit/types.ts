import { ContactsType, UserProfileType } from 'api/types'
import { Nullable } from 'types'

export type ProfileEditType = {
	aboutMe: string
	contacts: ContactsType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
}

export type ProfileDataEditPropsType = {
	userProfile: Nullable<UserProfileType>
	setEditProfile: (editProfile: boolean) => void
	editProfile: boolean
}
