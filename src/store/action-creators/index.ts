import { authAsyncActions } from "store/thunks"
import { appAsyncActions } from "store/thunks/app"
import { profileAsyncActions } from "store/thunks/profile"
import { usersAsyncActions } from "store/thunks/users"
import { appActions } from "./app"
import { authActions } from "./auth"
import { dialogsActions } from "./dialogs"
import { profileActions } from "./profile"
import { usersActions } from "./users"


const appActionCreators = {
	...appAsyncActions,
	...appActions
}

const authActionCreators = {
	...authAsyncActions,
	...authActions
}

const usersActionCreators = {
	...usersAsyncActions,
	...usersActions
}

const profileActionCreators = {
	...profileAsyncActions,
	...profileActions
}

const dialogsActionCreators = {
	...dialogsActions
}

export {
	appActionCreators,
	authActionCreators,
	usersActionCreators,
	profileActionCreators,
	dialogsActionCreators
}