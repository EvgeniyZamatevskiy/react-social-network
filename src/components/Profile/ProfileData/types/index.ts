import { UserProfileResponseType } from "api/profile/types"

export type ProfileDataPropsType = {
	onActivateEditModeClick: () => void
	userProfile: UserProfileResponseType
	isOwner: boolean
}