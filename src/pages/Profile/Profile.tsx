import React, { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { useActions } from '../../store/hooks'
import { PostsList, ProfileInfo } from 'components'
import { getIsAuth, getId } from 'store/selectors/auth'
import { profileActionCreators } from 'store/action-creators'

type ProfilePropsType = {

}

export const Profile = withRouter((props): ReactElement => {

	const isAuth = useSelector(getIsAuth)
	const authorizedUserId = useSelector(getId)
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