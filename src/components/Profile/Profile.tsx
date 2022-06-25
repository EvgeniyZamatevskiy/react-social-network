import React, { FC, useEffect } from 'react'
import style from './Profile.module.scss'
import { Posts } from './Posts'
import { useSelector } from 'react-redux'
import { selectId, selectIsAuth } from 'store/selectors/auth'
import { Navigate, useParams } from 'react-router-dom'
import { Path } from 'enums'
import { useTypedDispatch } from 'store/hooks'
import { getUserProfileTC, getUserStatusTC } from 'store/profileReducer'
import { ProfileInfo } from './ProfileInfo'
import { NoPosts } from './NoPosts/NoPosts'

export const Profile: FC = () => {

	const dispatch = useTypedDispatch()

	const { userId } = useParams<{ userId: string }>()

	const isAuth = useSelector(selectIsAuth)
	const authorizedUserId = useSelector(selectId)

	const isOwner = !userId

	useEffect(() => {
		const currentUserId = isOwner ? authorizedUserId : userId

		if (isAuth) {
			dispatch(getUserProfileTC(+currentUserId!))
			dispatch(getUserStatusTC(+currentUserId!))
		}
	}, [userId])

	if (!isAuth) {
		return <Navigate to={Path.login} />
	}

	return (
		<div className={style.profile}>
			<ProfileInfo isOwner={isOwner} />
			{isOwner
				? <Posts />
				: <NoPosts />}
		</div>
	)
}
