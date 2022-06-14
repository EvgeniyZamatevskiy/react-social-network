import { usersAPI, UsersType } from '../../../api/usersAPI'
import { ThunkType } from '../../store'
import { toggleIsLoadingAC } from '../app-reducer/actions'

// ActionCreators
export const toggleFollowedAC = (userId: number) => ({ type: 'TOGGLE-FOLLOWED', userId } as const)

export const getUsersAC = (users: UsersType[]) => ({ type: 'GET-USERS', users } as const)

export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage } as const)

export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const)

// ThunkCreators
export const getUsersTC = (count: number, page: number): ThunkType => async (dispatch) => {
	try {
		dispatch(toggleIsLoadingAC(true))
		dispatch(setCurrentPageAC(page))
		const res = await usersAPI.getUsers(count, page)
		dispatch(getUsersAC(res.data.items))
		dispatch(setTotalUsersCountAC(res.data.totalCount))
		dispatch(toggleIsLoadingAC(false))
	} catch (error: any) {
		alert(error.message)
		dispatch(toggleIsLoadingAC(false))
	}
}

export const usersAsyncActions = {
	getUsersTC,
}

export const usersActions = {
	toggleFollowedAC,
	getUsersAC,
	setCurrentPageAC
}

// types
export type UsersReducerActionsType =
	ToggleFollowedActionType | GetUsersActionType | SetCurrentPageActionType |
	SetTotalUsersCountActionType

type ToggleFollowedActionType = ReturnType<typeof toggleFollowedAC>
type GetUsersActionType = ReturnType<typeof getUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>