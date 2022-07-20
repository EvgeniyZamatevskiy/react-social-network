import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react'
import { EditableSpan } from 'components/common'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/hooks'
import { selectUserStatus } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { ProfileData } from '../ProfileData'
import { ProfileDataEdit } from '../ProfileDataEdit/ProfileDataEdit'
import { ProfileInfoPropsType } from './types'
import avatar from 'assets/images/avatar.png'
import style from './ProfileInfo.module.scss'
import { updateUserPhoto, updateUserStatus } from 'store/asyncActions'

const FIRST_FILES_INDEX = 0

export const ProfileInfo: FC<ProfileInfoPropsType> = memo(({ isOwner, userProfile }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const userStatus = useSelector(selectUserStatus)

	const [editProfile, setEditProfile] = useState<boolean>(false)

	const userImage = userProfile?.photos.small ? userProfile.photos.small : avatar

	const handleChangeUserStatusClick = useCallback((newStatus: string): void => {
		dispatch(updateUserStatus(newStatus))
	}, [])

	const onUpdateUserPhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const image = e.currentTarget.files![FIRST_FILES_INDEX]
		dispatch(updateUserPhoto(image))
	}

	return (
		<>
			<div className={style.profileInfo}>
				<img src={userImage} />
				<div className={style.name}>{userProfile?.fullName}</div>
				{isOwner
					? <EditableSpan currentValue={userStatus} changeValue={handleChangeUserStatusClick} />
					: <span className={style.status}>{userStatus}</span>}
				{isOwner && <input type='file' onChange={onUpdateUserPhotoChange} />}
			</div>
			{editProfile
				? <ProfileDataEdit userProfile={userProfile} setEditProfile={setEditProfile} editProfile={editProfile} />
				: <ProfileData userProfile={userProfile} setEditProfile={setEditProfile} isOwner={isOwner} />}
		</>
	)
})
