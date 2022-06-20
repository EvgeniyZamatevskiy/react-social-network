import { UserProfileResponseType } from "api/profile/types"

export type ProfileDataFormPropsType = {
	userProfile: UserProfileResponseType
	setEditMode: (editMode: boolean) => void
}