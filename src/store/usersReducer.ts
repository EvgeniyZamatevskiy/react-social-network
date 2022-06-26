import { FOLLOW } from 'api/follow'
import { UserType } from 'api/types'
import { USERS } from 'api/users'
import { EMPTY_STRING, ERROR_MESSAGE } from 'constants/base'
import { ResponseCode } from 'enums/ResponseCode'
import { Nullable } from 'types'
import { setErrorAC, setIsLoadingAC } from './appReducer'
import { ThunkType } from './store'

const initialState: InitialStateType = {
	users: [],
	count: 9,
	page: 1,
	totalCount: 0,
	filter: { term: EMPTY_STRING, friend: null }
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'users/SET-USERS':
			return { ...state, users: action.users.map(user => ({ ...user, disabledStatus: false })) }
		case 'users/SET-TOTAL-COUNT':
			return { ...state, totalCount: action.totalCount }
		case 'users/SET-PAGE':
			return { ...state, page: action.page }
		case 'users/SET-FILTER':
			return { ...state, filter: action.payload }
		case 'users/FOLLOW':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user) }
		case 'users/UNFOLLOW':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user) }
		case 'users/SET-DISABLED-STATUS':
			return { ...state, users: state.users.map(user => user.id === action.userId ? { ...user, disabledStatus: action.isDisabled } : user) }

		default:
			return state
	}
}

// actionsCreators
export const setUsersAC = (users: UserType[]) => ({ type: 'users/SET-USERS', users } as const)

export const setTotalCountAC = (totalCount: number) => ({ type: 'users/SET-TOTAL-COUNT', totalCount } as const)

export const setPageAC = (page: number) => ({ type: 'users/SET-PAGE', page } as const)

export const setFilterAC = (filter: FilterType) => ({ type: 'users/SET-FILTER', payload: filter } as const)

export const followAC = (userId: number) => ({ type: 'users/FOLLOW', userId } as const)

export const unfollowAC = (userId: number) => ({ type: 'users/UNFOLLOW', userId } as const)

export const setDisabledStatusAC = (userId: number, isDisabled: boolean) => ({ type: 'users/SET-DISABLED-STATUS', userId, isDisabled } as const)

// thunkCreators
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

// types
export type InitialStateType = {
	users: UsersSupplementedType[]
	count: number
	page: number
	totalCount: number
	filter: FilterType
}

export type UsersSupplementedType = UserType & {
	disabledStatus: boolean
}

export type FilterType = {
	term: string
	friend: Nullable<boolean>
}

export type UsersReducerActionsType =
	ReturnType<typeof setUsersAC> |
	ReturnType<typeof setTotalCountAC> |
	ReturnType<typeof setPageAC> |
	ReturnType<typeof setFilterAC> |
	ReturnType<typeof followAC> |
	ReturnType<typeof unfollowAC> |
	ReturnType<typeof setDisabledStatusAC> 
