import { usersAPI, UsersType } from '../../../api/usersAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const toggleFollowedAC = (userId: number) => ({ type: 'TOGGLE-FOLLOWED', userId } as const)

export const getUsersAC = (users: UsersType[]) => ({ type: 'GET-USERS', users } as const)

// ThunkCreators
export const getUsersTC = (): ThunkType => async (dispatch) => {
	try {
		const res = await usersAPI.getUsers()
		dispatch(getUsersAC(res.data.items))
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
}

// types
export type UsersReducerActionsType = ToggleFollowedActionType | GetUsersActionType

type ToggleFollowedActionType = ReturnType<typeof toggleFollowedAC>
type GetUsersActionType = ReturnType<typeof getUsersAC>