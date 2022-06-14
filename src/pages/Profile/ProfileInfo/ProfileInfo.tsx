import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useActions } from '../../../redux/hooks'
import { profileActionCreators } from '../../../redux/reducers/profile-reducer'
import { selectUserProfile } from '../../../redux/reducers/profile-reducer/selectors'

type ProfileInfoPropsType = {

}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ }) => {

	const userProfile = useSelector(selectUserProfile)

	const { getUserProfileTC } = useActions(profileActionCreators)

	const params = useParams()

	useEffect(() => {
		getUserProfileTC(params.userId!)
	}, [])

	return (
		<div>
			<div>
				<img src={userProfile?.photos.small !== null ? userProfile?.photos.small : 'Loading...'} />
			</div>
		</div>
	)
}