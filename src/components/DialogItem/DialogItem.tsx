import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { DialogsType } from '../../redux/reducers/dialogs-reducer/dialogs-reducer'

type DialogItemPropsType = {
	dialog: DialogsType
}

export const DialogItem: FC<DialogItemPropsType> = ({ dialog }) => {
	return (
		<div>
			<NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>
		</div>
	)
}