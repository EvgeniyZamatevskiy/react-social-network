import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { UniversalButton } from '../../../components/UI/UniversalButton/UniversalButton'
import { useActions } from '../../../redux/hooks'
import { usersActionCreators } from '../../../redux/reducers/users-reducer'
import { UsersSupplementedType } from '../../../redux/reducers/users-reducer/users-reducer'
import s from './UsersItem.module.css'

type UsersItemPropsType = {
	user: UsersSupplementedType
}

export const UsersItem: FC<UsersItemPropsType> = ({ user }) => {

	const { followTC, unFollowTC } = useActions(usersActionCreators)

	const followHandler = () => {
		followTC(user.id)
	}

	const unFollowHandler = () => {
		unFollowTC(user.id)
	}

	return (
		<div>
			<NavLink to={`/profile/${user.id}`}>
				<img className={s.userPhoto} src={user.photos.small ? user.photos.small : 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'} />
			</NavLink>
			<div>
				{user.followed
					? <UniversalButton disabled={user.disabledStatus} onClick={unFollowHandler}>UnFollow</UniversalButton>
					: <UniversalButton disabled={user.disabledStatus} onClick={followHandler}>Follow</UniversalButton>}
			</div>
			<div>
				{user.name}
				{user.status}
			</div>
		</div>
	)
}