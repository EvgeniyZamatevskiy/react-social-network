import React, { FC } from 'react'
import s from './DialogsList.module.css'
import { useSelector } from 'react-redux'
import { DialogItem } from 'components/DialogItem'
import { MessageItem } from 'components/MessageItem'
import { getDialogs, getMessages } from 'store/selectors/dialogs'

type DialogsListPropsType = {

}

export const DialogsList: FC<DialogsListPropsType> = ({ }) => {

	const dialogs = useSelector(getDialogs)
	const messages = useSelector(getMessages)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog} />)}
			</div>
			<div className={s.messages}>
				{messages.map(message => <MessageItem key={message.id} message={message} />)}
			</div>
		</div>
	)
}