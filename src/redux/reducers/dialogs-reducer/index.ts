import { dialogsActions, dialogsAsyncActions } from './actions'

const dialogsActionCreators = {
	...dialogsAsyncActions,
	...dialogsActions
}

export {
	dialogsActionCreators
}