import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { useActions } from '../../redux/hooks'
import { selectId, selectIsAuth } from '../../redux/reducers/auth-reducer/selectors'
import { profileActionCreators } from '../../redux/reducers/profile-reducer'
import { PostsList } from '../../components/PostsList/PostsList'
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'

type ProfilePropsType = {

}

export const Profile = withRouter((props) => {

	const isAuth = useSelector(selectIsAuth)
	const authorizedUserId = useSelector(selectId)
	const { getUserProfileTC, getStatusTC } = useActions(profileActionCreators)

	useEffect(() => {
		let userId = props.match.params.userId
		if (!userId) {
			userId = authorizedUserId
		}

		if (isAuth) {
			getStatusTC(userId)
			getUserProfileTC(userId)
		}
	}, [props.match.params.userId])

	if (!isAuth) {
		return <Redirect to={'/login'} />
	}

	return (
		<div>
			<ProfileInfo isOwner={!props.match.params.userId} />
			<PostsList />
		</div>
	)
})