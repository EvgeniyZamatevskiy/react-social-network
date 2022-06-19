import React, { FC } from 'react'
import { MessagesType } from 'store/reducers/dialogsReducer'

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