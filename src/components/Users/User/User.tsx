import React, { FC, memo } from 'react'
import avatar from 'assets/images/avatar.png'
import style from './User.module.scss'
import { UserPropsType } from './types'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { useTypedDispatch } from 'store/hooks'
import { followTC, unfollowTC } from 'store/usersReducer'
import { NavLink } from 'react-router-dom'

export const User: FC<UserPropsType> = memo(({ user }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const onFollowClick = (): void => {
		dispatch(followTC(user.id))
	}

	const onUnfollowClick = (): void => {
		dispatch(unfollowTC(user.id))
	}

	return (
		<div className={style.user}>
			<NavLink to={`/profile/${user.id}`}>
				<img src={user.photos.small ? user.photos.small : avatar} />
			</NavLink>
			<span className={style.name}>{user.name}</span>
			{user.followed
				? <button onClick={onUnfollowClick}>Unfollow</button>
				: <button onClick={onFollowClick}>Follow</button>}
		</div>
	)
})
