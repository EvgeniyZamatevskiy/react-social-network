import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { PostsList, ProfileInfo } from 'components'
import { selectIsAuth, selectId } from 'store/selectors/auth'
import { ReturnComponentType } from 'types'
import { Path } from 'enums'
import { useTypedDispatch } from 'store/hooks'
import { getStatusTC, getUserProfileTC } from 'store/middlewares/profile'

export const Profile = withRouter((props): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const isAuth = useSelector(selectIsAuth)
	const authorizedUserId = useSelector(selectId)

	const isOwner = !props.match.params.userId

	useEffect(() => {
		let userId = props.match.params.userId

		if (!userId) {
			userId = authorizedUserId
		}

		if (isAuth) {
			dispatch(getStatusTC(userId))
			dispatch(getUserProfileTC(userId))
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
