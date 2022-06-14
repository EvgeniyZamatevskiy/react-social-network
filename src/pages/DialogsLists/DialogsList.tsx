import React, { FC } from 'react'
import { DialogsItem } from './DialogsItem/DialogsItem'
import { MessagesItem } from './MessagesItem/MessagesItem'
import s from './DialogsList.module.css'
import { useSelector } from 'react-redux'
import { selectDialogs, selectMessages } from '../../redux/reducers/dialogs-reducer/selectors'
import { AddItemForm } from '../../components/AddItemForm/AddItemForm'
import { useActions } from '../../redux/hooks'
import { dialogsActionCreators } from '../../redux/reducers/dialogs-reducer'

type DialogsListPropsType = {

}

export const DialogsList: FC<DialogsListPropsType> = ({ }) => {

	const { sendMessageAC } = useActions(dialogsActionCreators)
	const dialogs = useSelector(selectDialogs)
	const messages = useSelector(selectMessages)

	const sendMessageHandler = (message: string) => {
		sendMessageAC(message)
	}

	const dialogsElements = dialogs.map(d => <DialogsItem key={d.id} dialog={d} />)
	const messagesElements = messages.map(m => <MessagesItem key={m.id} message={m} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
			<div>
				<AddItemForm addItem={sendMessageHandler} buttonTitle={'Send message'} />
			</div>
		</div>
	)
}