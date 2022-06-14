import { toggleIsLoadingAC } from './../app-reducer/actions'
import { followAPI } from '../../../api/followAPI'
import { usersAPI, UsersType } from '../../../api/usersAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const followAC = (userId: number) => ({ type: 'FOLLOW', userId } as const)

export const unFollowAC = (userId: number) => ({ type: 'UN-FOLLOW', userId } as const)

export const setUsersAC = (users: UsersType[]) => ({ type: 'SET-USERS', users } as const)

export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage } as const)

export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const)

export const toggleDisabledStatusAC = (userId: number, isDisabled: boolean) => ({ type: 'TOGGLE-DISABLED-STATUS', userId, isDisabled } as const)

// ThunkCreators
export const getUsersTC = (count: number, page: number): ThunkType => async (dispatch) => {
	try {
		dispatch(toggleIsLoadingAC(true))
		dispatch(setCurrentPageAC(page))
		const res = await usersAPI.getUsers(count, page)
		dispatch(setUsersAC(res.data.items))
		dispatch(setTotalUsersCountAC(res.data.totalCount))
		dispatch(toggleIsLoadingAC(false))
	} catch (error: any) {
		alert(error.message)
		dispatch(toggleIsLoadingAC(false))
	}
}

export const followTC = (userId: number): ThunkType => async (dispatch) => {
	dispatch(toggleDisabledStatusAC(userId, true))
	try {
		const res = await followAPI.follow(userId)
		if (res.data.resultCode === 0) {
			dispatch(followAC(userId))
			dispatch(toggleDisabledStatusAC(userId, false))
		} else {
			alert(res.data.messages[0])
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
		const res = await followAPI.unFollow(userId)
		if (res.data.resultCode === 0) {
			dispatch(unFollowAC(userId))
			dispatch(toggleDisabledStatusAC(userId, false))
		} else {
			alert(res.data.messages[0])
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

export const usersActions = {
	followAC,
	setUsersAC,
	setCurrentPageAC,
	unFollowAC,
	toggleDisabledStatusAC,
	setTotalUsersCountAC
}

// types
export type UsersReducerActionsType =
	FollowActionType | UnFollowActionType | SetUsersActionType |
	SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleDisabledStatusActionType

type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unFollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
type ToggleDisabledStatusActionType = ReturnType<typeof toggleDisabledStatusAC>