import { USERS, UserType } from "api/users"
import { ThunkType } from "./store"

const initialState: InitialStateType = {
	users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'users/SET-USERS':
			return { ...state, users: action.users }

		default:
			return state
	}
}

// actionsCreators
export const setUsersAC = (users: UserType[]) => ({ type: 'users/SET-USERS', users } as const)

export const getUsersTC = (): ThunkType => async (dispatch) => {
	try {
		const response = await USERS.getUsers()
		const { items: users, totalCount } = response.data

		dispatch(setUsersAC(users))
	} catch (error: any) {
		alert(error.message)
	}
}

// types
export type InitialStateType = {
	users: UserType[]
}

export type UsersReducerActionsType =
	ReturnType<typeof setUsersAC>
