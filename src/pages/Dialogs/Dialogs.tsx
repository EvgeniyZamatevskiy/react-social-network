import { DialogsList } from 'components'
import { Path } from 'enums'
import React, { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { dialogsActionCreators } from 'store/action-creators'
import { getIsAuth } from 'store/selectors/auth'
import { ReturnComponentType } from 'types'
import { AddItemForm } from '../../components/common/AddItemForm/AddItemForm'
import { useActions } from '../../store/hooks'

type DialogsPropsType = {

}

export const Dialogs: FC<DialogsPropsType> = ({ }): ReturnComponentType => {

	const isAuth = useSelector(getIsAuth)
	const { sendMessageAC } = useActions(dialogsActionCreators)

	const sendMessageHandler = (message: string): void => {
		sendMessageAC(message)
	}
	if (!isAuth) {
		return <Redirect to={Path.login} />
	}

	return (
		<div>
			<DialogsList />
			<AddItemForm addItem={sendMessageHandler} buttonTitle={'Send message'} />
		</div>
	)
}