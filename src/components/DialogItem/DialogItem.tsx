import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { DialogItemPropsType } from './types'
import style from './style/DialogItem.module.css'

export const DialogItem: FC<DialogItemPropsType> = ({ dialog }): ReturnComponentType => {
	return (
		<div>
			<NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>
		</div>
	)
}