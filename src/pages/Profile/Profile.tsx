import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { PostsList, ProfileInfo } from 'components'
import { getIsAuth, getId } from 'store/selectors/auth'
import { ReturnComponentType } from 'types'
import { useActions } from 'store/hooks/useActions/useActions'
import { profileActionCreators } from 'store/actions'
import { Path } from 'enums'

export const Profile = withRouter((props): ReturnComponentType => {

	const { getUserProfileTC, getStatusTC } = useActions(profileActionCreators)

	const isAuth = useSelector(getIsAuth)
	const authorizedUserId = useSelector(getId)

	const isOwner = !props.match.params.userId

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
		return <Redirect to={Path.login} />
	}

	return (
		<div>
			<ProfileInfo isOwner={isOwner} />
			<PostsList isOwner={isOwner} />
		</div>
	)
})
