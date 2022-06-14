import { profileActions, profileAsyncActions } from './actions'

const profileActionCreators = {
	...profileAsyncActions,
	...profileActions
}

export {
	profileActionCreators
}