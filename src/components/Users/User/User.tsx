import React, { FC } from 'react'
import avatar from 'assets/images/user.png'
import { UserType } from 'api/users'
import style from './User.module.scss'

type UserPropsType = {
	user: UserType
}

export const User: FC<UserPropsType> = ({ user }) => {
	return (
		<div className={style.user}>
			<img src={user.photos.small ? user.photos.small : avatar} />
			<span className={style.name}>{user.name}</span>
			<button>Follow</button>
		</div>
	)
}
