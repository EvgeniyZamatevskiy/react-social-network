import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './Users.module.scss'

export const Users: FC = (): ReturnComponentType => {
	return (
		<div className={style.container}>
			Users
		</div>
	)
}
