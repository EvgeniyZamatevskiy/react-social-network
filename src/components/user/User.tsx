import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { UserPropsType } from './types'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './User.module.scss'
import { useAppDispatch } from 'hooks'
import { follow, unfollow } from 'store/asyncActions'
import { useSelector } from 'react-redux'
import { selectIsLoadingFollowStatus } from 'store/selectors'
import { AuthLoader } from 'components/common'

export const User: FC<UserPropsType> = ({ id, followed, name, photos, status }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const isLoadingFollowStatus = useSelector(selectIsLoadingFollowStatus)

	const onFollowClick = (): void => {
		dispatch(follow(id))
	}

	const onUnfollowClick = (): void => {
		dispatch(unfollow(id))
	}

	return (
		<div className={style.user}>
			<div className={style.body}>
				<img className={style.userAvatar} src={photos.small || defaultAvatar} alt='avatar' />
				<div className={style.content}>
					<div className={style.name}>{name}</div>
					<div className={style.status}>{status}</div>
				</div>
			</div>
			{followed
				? <button className={style.follow} onClick={onUnfollowClick}>Unfollow</button>
				: <button className={style.follow} onClick={onFollowClick}>Follow</button>}
		</div>
	)
}
