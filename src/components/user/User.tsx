import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { UserPropsType } from './types'
import { useAppDispatch } from 'hooks'
import { follow, unfollow } from 'store/asyncActions'
import { SmallLoader } from 'components/common'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/selectors'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './User.module.scss'
import { isDarkTheme } from 'utils'

export const User: FC<UserPropsType> = ({ id, followed, name, photos, status, followedStatus }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const theme = useSelector(selectTheme)

	const onFollowClick = (): void => {
		dispatch(follow(id))
	}

	const onUnfollowClick = (): void => {
		dispatch(unfollow(id))
	}

	return (
		<div className={`${style.user} ${isDarkTheme(theme) && style.userDark}`}>
			<div className={style.body}>
				<img className={style.userAvatar} src={photos.small || defaultAvatar} alt='avatar' />
				<div className={style.content}>
					<div className={style.name}>{name}</div>
					<div className={style.status}>{status}</div>
				</div>
			</div>
			{followed
				? <button
					className={`${style.follow} ${isDarkTheme(theme) && style.followDark}`}
					disabled={followedStatus.isDisabled}
					onClick={onUnfollowClick}
				>
					{followedStatus.isLoading ? <SmallLoader /> : 'Unfollow'}
				</button>
				: <button
					className={`${style.follow} ${isDarkTheme(theme) && style.followDark}`}
					disabled={followedStatus.isDisabled}
					onClick={onFollowClick}
				>
					{followedStatus.isLoading ? <SmallLoader /> : 'Follow'}
				</button>}
		</div>
	)
}
