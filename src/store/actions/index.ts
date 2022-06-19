import { authAsyncActions } from "store/middlewares"
import { appAsyncActions } from "store/middlewares/app"
import { profileAsyncActions } from "store/middlewares/profile"
import { usersAsyncActions } from "store/middlewares/users"
import { appActions } from "./app/app"
import { authActions } from "./auth/auth"
import { profileActions } from "./profile/profile"
import { usersActions } from "./users/users"


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

export {
	appActionCreators,
	authActionCreators,
	usersActionCreators,
	profileActionCreators,
}