import React, { FC, useCallback, useState } from 'react'
import { EditableItem } from 'components/common'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'hooks'
import { selectUserStatus } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { ProfileData } from '../profileData'
import { ProfileDataEdit } from '../profileDataEdit/ProfileDataEdit'
import { updateUserStatus } from 'store/asyncActions'
import { File } from 'components/file'
import avatar from 'assets/images/avatar.png'
import style from './ProfileInfo.module.scss'
import { ProfileInfoPropsType } from './types'

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ isOwner, userProfile }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const userStatus = useSelector(selectUserStatus)

	const [editProfile, setEditProfile] = useState(false)

	const userImage = userProfile?.photos.small ? userProfile.photos.small : avatar

	const handleChangeUserStatusClick = useCallback((newStatus: string): void => {
		dispatch(updateUserStatus(newStatus))
	}, [])

	return (
		<>
			<div className={style.profileInfo}>
				<img
					className={style.userImage}
					src={userImage}
				/>
				<div className={style.name}>{userProfile?.fullName}</div>
				{isOwner
					? <EditableItem currentValue={userStatus} changeValue={handleChangeUserStatusClick} />
					: <span className={style.status}>{userStatus}</span>}
				{isOwner && <File />}
			</div>
			{editProfile
				? <ProfileDataEdit userProfile={userProfile} setEditProfile={setEditProfile} editProfile={editProfile} />
				: <ProfileData userProfile={userProfile} setEditProfile={setEditProfile} isOwner={isOwner} />}
		</>
	)
}
