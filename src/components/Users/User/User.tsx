import React, { FC, memo } from 'react'
import avatar from 'assets/images/avatar.png'
import style from './User.module.scss'
import { UserPropsType } from './types'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { useTypedDispatch } from 'store/hooks'
import { followTC, unfollowTC } from 'store/usersReducer'
import { NavLink } from 'react-router-dom'
import { Path } from 'enums'

export const User: FC<UserPropsType> = memo(({ user }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const userImage = user.photos.small ? user.photos.small : avatar

	const onFollowClick = (): void => {
		dispatch(followTC(user.id))
	}

	const onUnfollowClick = (): void => {
		dispatch(unfollowTC(user.id))
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
