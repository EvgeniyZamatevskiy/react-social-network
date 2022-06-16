import React, { FC } from 'react'
import { MessagesType } from '../../redux/reducers/dialogs-reducer/dialogs-reducer'

type MessageItemPropsType = {
	message: MessagesType
}

export const MessageItem: FC<MessageItemPropsType> = ({ message }) => {
	return (
		<div>
			{message.message}
		</div>
	)
}