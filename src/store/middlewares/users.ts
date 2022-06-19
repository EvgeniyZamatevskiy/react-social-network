import { usersAPI, followAPI } from "api"
import { toggleIsLoadingAC } from "store/actions/app/app"
import { setCurrentPageAC, setFilterAC, setUsersAC, setTotalUsersCountAC, toggleDisabledStatusAC, followAC, unFollowAC } from "store/actions/users/users"
import { ThunkType } from "store/store"

export const getUsersTC = (count: number, page: number, filter: any): ThunkType => async (dispatch) => {
	try {
		dispatch(toggleIsLoadingAC(true))
		dispatch(setCurrentPageAC(page))
		dispatch(setFilterAC(filter))
		const data = await usersAPI.getUsers(count, page, filter.term, filter.friend)
		dispatch(setUsersAC(data.items))
		dispatch(setTotalUsersCountAC(data.totalCount))
		dispatch(toggleIsLoadingAC(false))
	} catch (error: any) {
		alert(error.message)
		dispatch(toggleIsLoadingAC(false))
	}
}

export const followTC = (userId: number): ThunkType => async (dispatch) => {
	dispatch(toggleDisabledStatusAC(userId, true))
	try {
		const data = await followAPI.follow(userId)
		if (data.resultCode === 0) {
			dispatch(followAC(userId))
			dispatch(toggleDisabledStatusAC(userId, false))
		} else {
			alert(data.messages[0])
			dispatch(toggleDisabledStatusAC(userId, false))
		}
	} catch (error: any) {
		alert(error.message)
		dispatch(toggleDisabledStatusAC(userId, false))
	}
}

export const unFollowTC = (userId: number): ThunkType => async (dispatch) => {
	dispatch(toggleDisabledStatusAC(userId, true))
	try {
		const data = await followAPI.unFollow(userId)
		if (data.resultCode === 0) {
			dispatch(unFollowAC(userId))
			dispatch(toggleDisabledStatusAC(userId, false))
		} else {
			alert(data.messages[0])
			dispatch(toggleDisabledStatusAC(userId, false))
		}
	} catch (error: any) {
		alert(error.message)
		dispatch(toggleDisabledStatusAC(userId, false))
	}
}

export const usersAsyncActions = {
	getUsersTC,
	followTC,
	unFollowTC
}