import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Nullable, ReturnComponentType } from 'types'
import style from './Chat.module.scss'
import { EMPTY_STRING } from 'constants/base'
import { Message } from 'components/message'
import { MessageType } from 'api/chat'
import {WithAuthNavigate} from "../../hoc";

export const Chat: FC = WithAuthNavigate((): ReturnComponentType => {

	const [message, setMessage] = useState(EMPTY_STRING)
	const [webSocket, setWebSocket] = useState<Nullable<WebSocket>>(null)
	const [messages, setMessages] = useState<MessageType[]>([])
	const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

	const messagesRef = useRef<HTMLDivElement>(null)

	const messagesRender = messages.map((message, index) => <Message key={index} message={message} />)

	useEffect(() => {
		let localWebSocket: WebSocket

		const handleClose = () => {
			setTimeout(createChannel, 3000)
		}

		const createChannel = () => {
			localWebSocket?.removeEventListener('close', handleClose)
			localWebSocket?.close()
			localWebSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
			localWebSocket.addEventListener('close', handleClose)
			setWebSocket(localWebSocket)
		}
		createChannel()

		return (() => {
			localWebSocket.removeEventListener('close', handleClose)
			localWebSocket.close()
		})
	}, [])

	useEffect(() => {
		let handleOpen = () => {
			setReadyStatus('ready')
		}
		webSocket?.addEventListener('open', handleOpen)

		return (() => {
			webSocket?.removeEventListener('open', handleOpen)
		})
	}, [webSocket])
	// messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight)

	useEffect(() => {
		let messageHandle = (event: MessageEvent) => {
			const newMessages = JSON.parse(event.data)
			setMessages(prev => [...prev, ...newMessages])
		}

		webSocket?.addEventListener('message', messageHandle)

		return (() => {
			webSocket?.removeEventListener('message', messageHandle)
		})
	}, [webSocket])

	const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
		setMessage(event.currentTarget.value)
	}

	const onSendMessageClick = (): void => {
		webSocket?.send(message)
		setMessage(EMPTY_STRING)
	}

	return (
		<div>
			<div className={style.messages} ref={messagesRef}>
				{messagesRender}
			</div>

			<textarea value={message} onChange={onMessageChange}></textarea>
			<button disabled={webSocket === null || readyStatus !== 'ready'} onClick={onSendMessageClick} style={{ color: 'white' }}>Send</button>
		</div>
	)
})
