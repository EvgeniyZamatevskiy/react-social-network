import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { DialogsType } from '../../../redux/reducers/dialogs-reducer/dialogs-reducer'

type DialogsItemPropsType = {
	dialog: DialogsType
}

export const DialogsItem: FC<DialogsItemPropsType> = ({ dialog }) => {
	return (
		<div>
			<NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>
		</div>
	)
}