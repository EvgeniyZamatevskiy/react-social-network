import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {
	return (
		<div className={style.profile}>
			Profile
		</div>
	)
}
