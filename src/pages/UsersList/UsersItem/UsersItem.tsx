import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { UsersType } from '../../../api/usersAPI'
import { useActions } from '../../../redux/hooks'
import { usersActionCreators } from '../../../redux/reducers/users-reducer'
import s from './UsersItem.module.css'

type UsersItemPropsType = {
	user: UsersType
}

export const UsersItem: FC<UsersItemPropsType> = ({ user }) => {

	const { toggleFollowedAC } = useActions(usersActionCreators)

	const toggleFollowedHandler = () => {
		toggleFollowedAC(user.id)
	}

	return (
		<div>
			<NavLink to={`/profile/${user.id}`}>
				<img className={s.userPhoto} src={user.photos.small ? user.photos.small : 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'} />
			</NavLink>
			<div>
				<button onClick={toggleFollowedHandler}>{user.followed ? 'UnFollow' : 'Follow'}</button>
			</div>
			<div>
				{user.name}
				{user.status}
			</div>
		</div>
	)
}