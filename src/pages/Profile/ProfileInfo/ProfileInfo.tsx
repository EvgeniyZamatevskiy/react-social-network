import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useActions } from '../../../redux/hooks'
import { profileActionCreators } from '../../../redux/reducers/profile-reducer'
import { selectUserProfile, selectUserStatus } from '../../../redux/reducers/profile-reducer/selectors'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

type ProfileInfoPropsType = {

}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ }) => {

	const userProfile = useSelector(selectUserProfile)
	const userStatus = useSelector(selectUserStatus)

	const { getUserProfileTC, updateUserStatusTC, getStatusTC } = useActions(profileActionCreators)

	const changeUserStatusHandler = (newStatus: string) => {
		updateUserStatusTC(newStatus)
	}

	const params = useParams()

	useEffect(() => {
		getUserProfileTC(params.userId!)
		getStatusTC(+params.userId!)
	}, [])

	return (
		<div>
			<div>
				<img src={userProfile?.photos.small !== null ? userProfile?.photos.small : 'Loading...'} />
				<ProfileStatus currentValue={userStatus} changeValue={changeUserStatusHandler} />
			</div>
		</div>
	)
}