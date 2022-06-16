import React, { ChangeEvent, FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserProfileResponseType } from '../../api/profileAPI'
import { useActions } from '../../redux/hooks'
import { profileActionCreators } from '../../redux/reducers/profile-reducer'
import { selectUserStatus } from '../../redux/reducers/profile-reducer/selectors'
import { ProfileData } from '../ProfileData/ProfileData'
import { ProfileDataForm } from '../ProfileDataForm/ProfileDataForm'
import { ProfileStatus } from '../ProfileStatus/ProfileStatus'

type ProfileInfoPropsType = {
	isOwner: boolean
	userProfile: UserProfileResponseType | null
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ isOwner, userProfile }) => {

	let [editMode, setEditMode] = useState(false)

	const userStatus = useSelector(selectUserStatus)
	const { updateUserStatusTC, savePhotoTC } = useActions(profileActionCreators)

	const changeUserStatusHandler = (newStatus: string) => {
		updateUserStatusTC(newStatus)
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			savePhotoTC(e.target.files[0])
		}
	}

	const goToEditMode = () => {
		setEditMode(true)
	}

	if (!userProfile) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div>
				<img
					style={{ width: '200px' }}
					src={userProfile.photos.large || 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'} />
				{isOwner && <input type={'file'} onChange={onChangeHandler} />}

				{editMode
					? <ProfileDataForm userProfile={userProfile} setEditMode={setEditMode} />
					: <ProfileData goToEditMode={goToEditMode} userProfile={userProfile} isOwner={isOwner} />}

				<ProfileStatus currentValue={userStatus} changeValue={changeUserStatusHandler} />
			</div>
		</div>
	)
}