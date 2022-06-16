import React, { FC } from 'react'
import { DialogItem } from '../DialogItem/DialogItem'
import { MessageItem } from '../MessageItem/MessageItem'
import s from './DialogsList.module.css'
import { useSelector } from 'react-redux'
import { selectDialogs, selectMessages } from '../../redux/reducers/dialogs-reducer/selectors'

type DialogsListPropsType = {

}

export const DialogsList: FC<DialogsListPropsType> = ({ }) => {

	const dialogs = useSelector(selectDialogs)
	const messages = useSelector(selectMessages)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogs.map(d => <DialogItem key={d.id} dialog={d} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <MessageItem key={m.id} message={m} />)}
			</div>
		</div>
	)
}