import React, { FC } from 'react'
import { MessagesType } from '../../../redux/reducers/dialogs-reducer/dialogs-reducer'

type MessagesItemPropsType = {
	message: MessagesType
}

export const MessagesItem: FC<MessagesItemPropsType> = ({ message }) => {
	return (
		<div>
			{message.message}
		</div>
	)
}