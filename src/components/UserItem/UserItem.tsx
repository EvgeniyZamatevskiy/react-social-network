import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { UniversalButton } from 'components/common/UniversalButton/UniversalButton'
import { UserItemPropsType } from './types'
import { ReturnComponentType } from 'types'
import { Path } from 'enums'
import { useActions } from 'store/hooks/useActions/useActions'
import style from './style/UserItem.module.css'
import { usersActionCreators } from 'store/actions'

export const UserItem: FC<UserItemPropsType> = ({ user }): ReturnComponentType => {

	const { followTC, unFollowTC } = useActions(usersActionCreators)

	const handleFollowClick = (): void => {
		followTC(user.id)
	}

	const handleUnFollowClick = (): void => {
		unFollowTC(user.id)
	}

	return (
		<div>
			<NavLink to={`${Path.profile}/${user.id}`}>
				<img
					className={style.userPhoto}
					src={user.photos.small ? user.photos.small : 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'} />
			</NavLink>
			<div>
				{user.followed
					? <UniversalButton disabled={user.disabledStatus} onClick={handleUnFollowClick}>UnFollow</UniversalButton>
					: <UniversalButton disabled={user.disabledStatus} onClick={handleFollowClick}>Follow</UniversalButton>}
			</div>
			<div>
				{user.name}
				{user.status}
			</div>
		</div>
	)
}
