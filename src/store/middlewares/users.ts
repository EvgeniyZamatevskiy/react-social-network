import { USERS, FOLLOW } from 'api'
import { ERROR_MESSAGE } from 'constants/base'
import { ResponseCode } from 'enums'
import { setIsLoadingAC, setUsersAC, setTotalCountAC, setPageAC, setFilterAC, setErrorAC, setDisabledStatusAC, followAC, unfollowAC } from 'store/actions'
import { FilterType } from 'store/reducers/users/types'
import { ThunkType } from 'store/store'

export const getUsersTC = (count: number, page: number, filter: FilterType): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const response = await USERS.getUsers(count, page, filter)
		const { items: users, totalCount } = response.data

		dispatch(setUsersAC(users))
		dispatch(setTotalCountAC(totalCount))
		dispatch(setPageAC(page))
		dispatch(setFilterAC(filter))
		dispatch(setIsLoadingAC(false))
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
	}
}

export const followTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))
		dispatch(setDisabledStatusAC(userId, true))

		const response = await FOLLOW.follow(userId)
		const { resultCode, messages } = response.data

		if (resultCode === ResponseCode.Success) {
			dispatch(followAC(userId))
			dispatch(setIsLoadingAC(false))
			dispatch(setDisabledStatusAC(userId, false))
		} else {
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
			dispatch(setIsLoadingAC(false))
			dispatch(setDisabledStatusAC(userId, false))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
		dispatch(setDisabledStatusAC(userId, false))
	}
}

export const unfollowTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))
		dispatch(setDisabledStatusAC(userId, true))

		const response = await FOLLOW.unfollow(userId)
		const { resultCode, messages } = response.data

		if (resultCode === ResponseCode.Success) {
			dispatch(unfollowAC(userId))
			dispatch(setIsLoadingAC(false))
			dispatch(setDisabledStatusAC(userId, false))
		} else {
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
			dispatch(setIsLoadingAC(false))
			dispatch(setDisabledStatusAC(userId, false))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
		dispatch(setDisabledStatusAC(userId, false))
	}
}