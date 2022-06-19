import { UserProfileResponseType } from "api/profileAPI/types"

export type ProfileDataPropsType = {
	onActivateEditModeClick: () => void
	userProfile: UserProfileResponseType
	isOwner: boolean
}