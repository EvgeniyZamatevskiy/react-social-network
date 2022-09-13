import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import cross from 'assets/icons/cross.svg'
import style from './Message.module.scss'
import { MessagePropsType } from './types'

export const Message: FC<MessagePropsType> = ({ message }): ReturnComponentType => {

	const { userId, message: messageText, userName, photo } = message

	return (
		<div className={style.container}>
			<img className={style.avatarImg} src={photo} alt='avatar' />

			<div className={style.angle}></div>

			<div className={style.content}>
				<div className={style.body}>
					<div className={style.name}>{userName}</div>
					<img className={style.crossIcon} src={cross} alt='cross' />
				</div>
				<div className={style.messageText}>{messageText}</div>
				<div className={style.time}>18:00:00</div>
			</div>
		</div>
	)
}
