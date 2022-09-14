import React, { FC } from 'react'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { ReturnComponentType } from 'types/ReturnComponentType'
import avatar from 'assets/images/avatar.png'
import { follow, unfollow } from 'store/asyncActions/users'
import { UserPropsType } from './types'
import { CustomLink } from 'components/common/customLink/CustomLink'
import { useSelector } from 'react-redux'
import { selectDisabledUserId } from 'store/selectors'
import style from './User.module.scss'

export const User: FC<UserPropsType> = ({ user }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const disabledUserId = useSelector(selectDisabledUserId)

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
				? <button disabled={disabledUserId.some(id => id === user.id)} onClick={onUnfollowClick}>Unfollow</button>
				: <button disabled={disabledUserId.some(id => id === user.id)} onClick={onFollowClick}>Follow</button>}
		</div>
	)
}
