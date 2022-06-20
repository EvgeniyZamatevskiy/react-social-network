import React, { ChangeEvent, FC, useState } from 'react'
import { EditableStatus } from 'components/common/EditableStatus'
import { ProfileData } from 'components/ProfileData'
import { ProfileDataForm } from 'components/ProfileDataForm'
import { FIRST_ELEMENT_IN_ARRAY } from '../../constants'
import { useSelector } from 'react-redux'
import { getUserProfile, getUserStatus } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { ProfileInfoPropsType } from './types'
import { useTypedDispatch } from 'store/hooks'
import { savePhotoTC, updateUserStatusTC } from 'store/middlewares/profile'
export const ProfileInfo: FC<ProfileInfoPropsType> = ({ isOwner }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const userProfile = useSelector(getUserProfile)
	const userStatus = useSelector(getUserStatus)

	const [editMode, setEditMode] = useState<boolean>(false)

	const handleUserStatusChange = (newStatus: string): void => {
		dispatch(updateUserStatusTC(newStatus))
	}

	const onSavePhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (e.currentTarget.files?.length) {
			dispatch(savePhotoTC(e.currentTarget.files[FIRST_ELEMENT_IN_ARRAY]))
		}
	}

	const handleActivateEditModeClick = (): void => {
		setEditMode(true)
	}

	if (!userProfile) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<img
				style={{ width: '200px' }}
				src={userProfile.photos.large || 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'} />
			{isOwner && <input type={'file'} onChange={onSavePhotoChange} />}
			<div >
				{isOwner
					? <EditableStatus currentValue={userStatus} changeValue={handleUserStatusChange} />
					: <div><b>status</b>: {userStatus}</div>}
			</div>
			<div>
				{editMode
					? <ProfileDataForm userProfile={userProfile} setEditMode={setEditMode} />
					: <ProfileData onActivateEditModeClick={handleActivateEditModeClick} userProfile={userProfile} isOwner={isOwner} />}
			</div>
		</div>
	)
}
