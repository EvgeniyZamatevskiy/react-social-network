import React, { FC } from 'react'
import s from './DialogsList.module.css'
import { useSelector } from 'react-redux'
import { selectDialogs, selectMessages } from '../../redux/reducers/dialogs-reducer/selectors'
import { DialogItem } from 'components/DialogItem'
import { MessageItem } from 'components/MessageItem'

type DialogsListPropsType = {

}

export const DialogsList: FC<DialogsListPropsType> = ({ }) => {

	const dialogs = useSelector(selectDialogs)
	const messages = useSelector(selectMessages)

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