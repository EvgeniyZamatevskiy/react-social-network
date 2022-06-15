import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { useActions } from '../../../redux/hooks'
import { selectId } from '../../../redux/reducers/auth-reducer/selectors'
import { profileActionCreators } from '../../../redux/reducers/profile-reducer'
import { selectUserProfile, selectUserStatus } from '../../../redux/reducers/profile-reducer/selectors'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

type ProfileInfoPropsType = {

}

export const ProfileInfo = withRouter((props) => {

	const userProfile = useSelector(selectUserProfile)
	const userStatus = useSelector(selectUserStatus)
	const authorizedUserId = useSelector(selectId)

	const { getUserProfileTC, updateUserStatusTC, getStatusTC } = useActions(profileActionCreators)

	const changeUserStatusHandler = (newStatus: string) => {
		updateUserStatusTC(newStatus)
	}

	useEffect(() => {

		let userId = props.match.params.userId
		if (!userId) {
			userId = authorizedUserId
		}

		getUserProfileTC(userId)
		getStatusTC(userId)
	}, [])

	return (
		<div>
			<div>
				<img src={userProfile?.photos.small !== null ? userProfile?.photos.small : 'Loading...'} />
				<ProfileStatus currentValue={userStatus} changeValue={changeUserStatusHandler} />
			</div>
		</div>
	)
})