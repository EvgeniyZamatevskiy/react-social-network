import React, { FC } from 'react'
import { Path } from 'enums'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'
import { ReturnComponentType } from 'types/ReturnComponentType'
import avatar from 'assets/images/avatar.png'
import { follow, unfollow } from 'store/asyncActions/users'
import style from './User.module.scss'
import { UsersSupplementedType } from 'store/slices/users/types'

type UserPropsType = {
	user: UsersSupplementedType
}

export const User: FC<UserPropsType> = ({ user }): ReturnComponentType => {

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
			<NavLink to={`${Path.PROFILE}/${user.id}`}>
				<img src={userImage} />
			</NavLink>
			<span className={style.name}>{user.name}</span>
			{user.followed
				? <button disabled={user.isDisabled} onClick={onUnfollowClick}>Unfollow</button>
				: <button disabled={user.isDisabled} onClick={onFollowClick}>Follow</button>}
		</div>
	)
}
