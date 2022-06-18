import React, { ChangeEvent, FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../redux/hooks'
import { profileActionCreators } from '../../redux/reducers/profile-reducer'
import { selectUserProfile, selectUserStatus } from '../../redux/reducers/profile-reducer/selectors'
import { ProfileData } from '../ProfileData/ProfileData'
import { ProfileDataForm } from '../ProfileDataForm/ProfileDataForm'
import { ProfileStatus } from '../ProfileStatus/ProfileStatus'

type ProfileInfoPropsType = {
	isOwner: boolean
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ isOwner }) => {

	let [editMode, setEditMode] = useState(false)

	const userProfile = useSelector(selectUserProfile)
	const userStatus = useSelector(selectUserStatus)
	const { updateUserStatusTC, savePhotoTC } = useActions(profileActionCreators)

	const changeUserStatusHandler = (newStatus: string) => {
		updateUserStatusTC(newStatus)
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files?.length) {
			savePhotoTC(e.currentTarget.files[0])
		}
	}

	const goToEditMode = () => {
		setEditMode(true)
	}

	if (!userProfile) {
		return <div>Loading...</div>
	}

	return (
		<div >
			<div >
				<img
					style={{ width: '200px' }}
					src={userProfile.photos.large || 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'} />
				{isOwner && <input type={'file'} onChange={onChangeHandler} />}
				<div >
					{isOwner
						? <ProfileStatus currentValue={userStatus} changeValue={changeUserStatusHandler} />
						: <div><b>status</b>: {userStatus}</div>}
				</div>
				<div>
					{editMode
						? <ProfileDataForm userProfile={userProfile} setEditMode={setEditMode} />
						: <ProfileData goToEditMode={goToEditMode} userProfile={userProfile} isOwner={isOwner} />}
				</div>
			</div>
		</div>
	)
}