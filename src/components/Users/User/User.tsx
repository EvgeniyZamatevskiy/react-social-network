import React, { FC } from 'react'
import avatar from 'assets/images/avatar.png'
import style from './User.module.scss'
import { UserPropsType } from './types'
import { ReturnComponentType } from 'types/ReturnComponentType'

export const User: FC<UserPropsType> = ({ user }): ReturnComponentType => {
	return (
		<div className={style.user}>
			<img src={user.photos.small ? user.photos.small : avatar} />
			<span className={style.name}>{user.name}</span>
			<button>Follow</button>
		</div>
	)
}
