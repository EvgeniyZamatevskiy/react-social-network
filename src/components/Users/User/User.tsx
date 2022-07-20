import React, { FC, memo } from 'react'
import { Path } from 'enums'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { UserPropsType } from './types'
import avatar from 'assets/images/avatar.png'
import style from './User.module.scss'
import { follow, unfollow } from 'store/asyncActions/users'

export const User: FC<UserPropsType> = memo(({ user }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const userImage = user.photos.small ? user.photos.small : avatar

	const onFollowClick = (): void => {
		dispatch(follow(user.id))
	}

	const onUnfollowClick = (): void => {
		dispatch(unfollow(user.id))
	}

	return (
		<div className={style.user}>
			<NavLink to={`${Path.profile}/${user.id}`}>
				<img src={userImage} />
			</NavLink>
			<span className={style.name}>{user.name}</span>
			{user.followed
				? <button disabled={user.disabledStatus} onClick={onUnfollowClick}>Unfollow</button>
				: <button disabled={user.disabledStatus} onClick={onFollowClick}>Follow</button>}
		</div>
	)
})
