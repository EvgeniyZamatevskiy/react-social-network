import { setAppIsInitializedAC } from "store/action-creators/app"
import { ThunkType } from "store/store"
import { getUserDataTC } from "./auth"

export const initializeAppTC = (): ThunkType => (dispatch) => {
	let promise = dispatch(getUserDataTC())

	Promise.all([promise]).then(() => {
		dispatch(setAppIsInitializedAC(true))
	})
}

export const appAsyncActions = {
	initializeAppTC
}