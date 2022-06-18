import { DialogsList } from 'components'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AddItemForm } from '../../components/common/AddItemForm/AddItemForm'
import { useActions } from '../../redux/hooks'
import { selectIsAuth } from '../../redux/reducers/auth-reducer/selectors'
import { dialogsActionCreators } from '../../redux/reducers/dialogs-reducer'

type DialogsPropsType = {

}

export const Dialogs: FC<DialogsPropsType> = ({ }) => {

	const isAuth = useSelector(selectIsAuth)
	const { sendMessageAC } = useActions(dialogsActionCreators)

	const sendMessageHandler = (message: string) => {
		sendMessageAC(message)
	}
	if (!isAuth) {
		return <Redirect to='/login' />
	}

	return (
		<div>
			<DialogsList />
			<AddItemForm addItem={sendMessageHandler} buttonTitle={'Send message'} />
		</div>
	)
}