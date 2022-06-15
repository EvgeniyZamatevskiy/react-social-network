import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../../redux/hooks'
import { profileActionCreators } from '../../../redux/reducers/profile-reducer'
import { selectUserProfile, selectUserStatus } from '../../../redux/reducers/profile-reducer/selectors'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

type ProfileInfoPropsType = {

}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ }) => {

	const userProfile = useSelector(selectUserProfile)
	const userStatus = useSelector(selectUserStatus)
	const { updateUserStatusTC } = useActions(profileActionCreators)

	const changeUserStatusHandler = (newStatus: string) => {
		updateUserStatusTC(newStatus)
	}

	return (
		<div>
			<div>
				<img src={userProfile?.photos.small !== null ? userProfile?.photos.small : 'Loading...'} />
				<ProfileStatus currentValue={userStatus} changeValue={changeUserStatusHandler} />
			</div>
		</div>
	)
}