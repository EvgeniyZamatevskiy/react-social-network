import { usersAPI, UsersType } from '../../../api/usersAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const toggleFollowedAC = (userId: number) => ({ type: 'TOGGLE-FOLLOWED', userId } as const)

export const getUsersAC = (users: UsersType[]) => ({ type: 'GET-USERS', users } as const)

export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage } as const)

export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const)

// ThunkCreators
export const getUsersTC = (count: number, page: number): ThunkType => async (dispatch) => {
	try {
		dispatch(setCurrentPageAC(page))
		const res = await usersAPI.getUsers(count, page)
		dispatch(getUsersAC(res.data.items))
		dispatch(setTotalUsersCountAC(res.data.totalCount))
	} catch (error: any) {
		alert(error.message)
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