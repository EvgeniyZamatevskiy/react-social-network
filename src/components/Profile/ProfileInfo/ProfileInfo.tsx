import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUserStatus } from 'store/selectors/profile'
import { ReturnComponentType } from 'types/ReturnComponentType'
import avatar from 'assets/images/avatar.png'
import style from './ProfileInfo.module.scss'
import { ProfileInfoPropsType } from './types'
import { EditableSpan } from 'components/common'
import { useTypedDispatch } from 'store/hooks'
import { updateUserPhotoTC, updateUserStatusTC } from 'store/profileReducer'
import { ProfileDataEdit } from '../ProfileDataEdit/ProfileDataEdit'
import { ProfileData } from '../ProfileData'

export const ProfileInfo: FC<ProfileInfoPropsType> = memo(({ isOwner, userProfile }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const userStatus = useSelector(selectUserStatus)

	const [editProfile, setEditProfile] = useState<boolean>(false)

	const userImage = userProfile?.photos.small ? userProfile.photos.small : avatar

	const handleChangeUserStatusClick = useCallback((newStatus: string) => {
		dispatch(updateUserStatusTC(newStatus))
	}, [])

	const onUpdateUserPhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const image = e.currentTarget.files![0]
		dispatch(updateUserPhotoTC(image))
	}

	if (!userProfile) {
		return <div>Loading...</div>
	}

	return (
		<>
			<div className={style.profileInfo}>
				<img src={userImage} />
				<div className={style.name}>{userProfile?.fullName}</div>
				{isOwner
					? <EditableSpan currentValue={userStatus} changeValue={handleChangeUserStatusClick} />
					: <span className={style.status}>{userStatus}</span>}
				{isOwner && <input type={'file'} onChange={onUpdateUserPhotoChange} />}
			</div>
			{editProfile
				? <ProfileDataEdit userProfile={userProfile} setEditProfile={setEditProfile} editProfile={editProfile} />
				: <ProfileData userProfile={userProfile} setEditProfile={setEditProfile} isOwner={isOwner} />}
		</>
	)
})
