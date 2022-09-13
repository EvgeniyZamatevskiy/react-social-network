let subscribes = [] as SubscriberType[]

let localWebSocket: WebSocket

const createChannel = () => {
	localWebSocket?.removeEventListener('close', handleClose)
	localWebSocket?.close()
	localWebSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
	localWebSocket.addEventListener('close', handleClose)
}

const handleClose = () => {
	setTimeout(createChannel, 3000)
}

let messageHandle = (event: MessageEvent) => {
	const newMessages = JSON.parse(event.data)
	subscribes.forEach((subscriber) => subscriber(newMessages))
}

export const CHAT = {
	subscribe(callback: (messages: MessageType[]) => void) {
		subscribes.push(callback)
		return (() => {
			subscribes = subscribes.filter((subscriber) => subscriber !== callback)
		})
	},
	unsubscribe(callback: SubscriberType) {
		subscribes = subscribes.filter((subscriber) => subscriber !== callback)
	}
}

export type MessageType = {
	userId: number
	userName: string
	photo: string
	message: string
}

export type SubscriberType = (messages: MessageType[]) => void


