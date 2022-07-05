import React, { FC, useEffect } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import { useTypedDispatch } from 'store/hooks'
import { getUserProfileTC, getUserStatusTC } from 'store/middlewares'
import { selectIsAuth, selectId, selectUserProfile } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { NoPosts } from './NoPosts'
import { Posts } from './Posts'
import { ProfileInfo } from './ProfileInfo'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const { userId } = useParams<{ userId: string }>()

	const isAuth = useSelector(selectIsAuth)
	const authorizedUserId = useSelector(selectId)
	const userProfile = useSelector(selectUserProfile)

	const isOwner = !userId

	const scrollPageUp = () => window.scrollTo(0, 0)

	useEffect(() => {
		const currentUserId = isOwner ? authorizedUserId : userId

		if (isAuth) {
			dispatch(getUserProfileTC(+currentUserId!))
			dispatch(getUserStatusTC(+currentUserId!))
		}

		scrollPageUp()
	}, [userId])

	if (!isAuth) {
		return <Navigate to={Path.login} />
	}

	return (
		<div className={style.profile}>
			<ProfileInfo isOwner={isOwner} userProfile={userProfile} />
			{isOwner
				? <Posts image={userProfile?.photos.small} />
				: <NoPosts />}
		</div>
	)
}
