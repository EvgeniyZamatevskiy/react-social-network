import React, { FC, useEffect } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'
import { selectIsAuth, selectUserProfile, selectUserData } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { NoPosts } from './NoPosts'
import { Posts } from './Posts'
import { ProfileInfo } from './ProfileInfo'
import style from './Profile.module.scss'
import { getUserProfile, getUserStatus } from 'store/asyncActions'

export const Profile: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const { userId } = useParams<{ userId: string }>()

	const isAuth = useSelector(selectIsAuth)
	const authorizedUserId = useSelector(selectUserData)?.id
	const userProfile = useSelector(selectUserProfile)

	const isOwner = !userId

	const scrollPageUp = () => window.scrollTo(0, 0)

	useEffect(() => {
		const currentUserId = isOwner ? authorizedUserId : userId

		if (isAuth) {
			dispatch(getUserProfile(+currentUserId!))
			dispatch(getUserStatus(+currentUserId!))
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
