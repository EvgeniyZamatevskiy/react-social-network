import React, { FC } from 'react'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { ReturnComponentType } from 'types/ReturnComponentType'
import avatar from 'assets/images/avatar.png'
import { follow, unfollow } from 'store/asyncActions/users'
import style from './User.module.scss'
import { UserPropsType } from './types'
import { CustomLink } from 'components/common/customLink/CustomLink'

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
			<CustomLink to={`${Path.PROFILE}/${user.id}`}>
				<img src={userImage} />
			</CustomLink>
			<span className={style.name}>{user.name}</span>
			{user.followed
				? <button disabled={user.isDisabled} onClick={onUnfollowClick}>Unfollow</button>
				: <button disabled={user.isDisabled} onClick={onFollowClick}>Follow</button>}
		</div>
	)
}
