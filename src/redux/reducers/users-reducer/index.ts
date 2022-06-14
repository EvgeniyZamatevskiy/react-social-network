import { usersActions, usersAsyncActions } from './actions'

const usersActionCreators = {
	...usersAsyncActions,
	...usersActions
}

export {
	usersActionCreators
}