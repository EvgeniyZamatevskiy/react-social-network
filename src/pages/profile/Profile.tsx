import React, { FC, useEffect } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks'
import { selectAuthorizedUserId, selectIsAuth, selectUserProfile } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { NoPosts } from '../../components/noPosts'
import { ProfileInfo } from '../../components/profileInfo'
import { getUserProfile, getUserStatus } from 'store/asyncActions'
import { Posts } from 'components'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const { userId } = useParams<{ userId: string }>()

	const isAuth = useSelector(selectIsAuth)
	const authorizedUserId = useSelector(selectAuthorizedUserId)
	const userProfile = useSelector(selectUserProfile)

	const isOwner = !userId

	const scrollPageUp = () => window.scrollTo(0, 0)

	useEffect(() => {
		const currentUserId = isOwner ? authorizedUserId : userId

		if (isAuth) {
			dispatch(getUserProfile(+currentUserId!))
			dispatch(getUserStatus(+currentUserId!))
		}
	}, [userId])

	useEffect(() => {
		scrollPageUp()
	}, [])

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	return (
		<div className={style.profile}>
			<ProfileInfo isOwner={isOwner} userProfile={userProfile} />
			{isOwner
				? <Posts image={userProfile!?.photos.small} />
				: <NoPosts />}
		</div>
	)
}
