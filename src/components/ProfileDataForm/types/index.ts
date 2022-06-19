import { UserProfileResponseType } from "api/profileAPI/types"

export type ProfileDataFormPropsType = {
	userProfile: UserProfileResponseType
	setEditMode: (editMode: boolean) => void
}