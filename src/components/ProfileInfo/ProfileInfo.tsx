import React, { ChangeEvent, FC } from 'react'
import { useSelector } from 'react-redux'
import { UserProfileResponseType } from '../../api/profileAPI'
import { useActions } from '../../redux/hooks'
import { profileActionCreators } from '../../redux/reducers/profile-reducer'
import { selectUserStatus } from '../../redux/reducers/profile-reducer/selectors'
import { ProfileStatus } from '../ProfileStatus/ProfileStatus'

type ProfileInfoPropsType = {
	isOwner: boolean
	userProfile: UserProfileResponseType | null
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ isOwner, userProfile }) => {

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
				<ProfileStatus currentValue={userStatus} changeValue={changeUserStatusHandler} />
			</div>
		</div>
	)
}