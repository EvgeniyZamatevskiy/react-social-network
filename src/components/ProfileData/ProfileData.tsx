import React, { FC } from 'react'
import { UserProfileResponseType } from '../../api/profileAPI'

type ProfileDataPropsType = {
	goToEditMode: () => void
	userProfile: UserProfileResponseType
	isOwner: boolean
}

export const ProfileData: FC<ProfileDataPropsType> = ({ goToEditMode, userProfile, isOwner }) => {
	return (
		<div>
			{isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
			<div>
				<b>Full name</b>: {userProfile.fullName}
			</div>
			<div>
				<b>Looking for a job</b>: {userProfile.lookingForAJob ? "yes" : "no"}
			</div>
			{userProfile.lookingForAJob &&
				<div>
					<b>My professional skills</b>: {userProfile.lookingForAJobDescription}
				</div>
			}
			<div>
				<b>About me</b>: {userProfile.aboutMe}
			</div>

			<div>
				<h3>Contacts</h3>:
				<div>
					<b>github</b>: {userProfile.contacts?.github}
				</div>
				<div>
					<b>instagram</b>: {userProfile.contacts?.instagram}
				</div>
				<div>
					<b>mainLink</b>: {userProfile.contacts?.mainLink}
				</div>
				<div>
					<b>twitter</b>: {userProfile.contacts?.twitter}
				</div>
				<div>
					<b>vk</b>: {userProfile.contacts?.vk}
				</div>
				<div>
					<b>website</b>: {userProfile.contacts?.website}
				</div>
				<div>
					<b>facebook</b>: {userProfile.contacts?.facebook}
				</div>
				<div>
					<b>youtube</b>: {userProfile.contacts?.youtube}
				</div>
			</div>
		</div>
	)
}