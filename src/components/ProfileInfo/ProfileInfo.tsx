import { ProfileData } from 'components/ProfileData'
import { ProfileDataForm } from 'components/ProfileDataForm'
import { ProfileStatus } from 'components/ProfileStatus'
import { FIRST_ELEMENT_IN_ARRAY } from '../../constants'
import React, { ChangeEvent, FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../store/hooks'
import { getUserProfile, getUserStatus } from 'store/selectors/profile'
import { profileActionCreators } from 'store/action-creators'

type ProfileInfoPropsType = {
	isOwner: boolean
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ isOwner }) => {

	let [editMode, setEditMode] = useState(false)

	const userProfile = useSelector(getUserProfile)
	const userStatus = useSelector(getUserStatus)
	const { updateUserStatusTC, savePhotoTC } = useActions(profileActionCreators)

	const changeUserStatusHandler = (newStatus: string) => {
		updateUserStatusTC(newStatus)
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files?.length) {
			savePhotoTC(e.currentTarget.files[FIRST_ELEMENT_IN_ARRAY])
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