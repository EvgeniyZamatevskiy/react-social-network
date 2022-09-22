import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { UserPropsType } from './types'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './User.module.scss'

export const User: FC<UserPropsType> = (): ReturnComponentType => {
	return (
		<div className={style.user}>
			<div className={style.body}>
				<img className={style.userAvatar} src={defaultAvatar} alt='avatar' />
				<div className={style.content}>
					<div className={style.name}>Evgeniy Zamatevskiy</div>
					<div className={style.status}>Front-end developer</div>
				</div>
			</div>
			<button className={style.follow}>Follow</button>
		</div>
	)
}
