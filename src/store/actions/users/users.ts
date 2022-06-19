import { UsersType } from 'api/usersAPI/types'
import { InferActionsTypes } from 'store/store'

export const followAC = (userId: number) => ({ type: 'FOLLOW', userId } as const)

export const unFollowAC = (userId: number) => ({ type: 'UN-FOLLOW', userId } as const)

export const setUsersAC = (users: UsersType[]) => ({ type: 'SET-USERS', users } as const)

export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage } as const)

export const setFilterAC = (filter: any) => ({ type: 'SET-FILTER', payload: filter } as const)

export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const)

export const toggleDisabledStatusAC = (userId: number, isDisabled: boolean) => ({ type: 'TOGGLE-DISABLED-STATUS', userId, isDisabled } as const)

export const usersActions = {
	followAC,
	setUsersAC,
	setCurrentPageAC,
	unFollowAC,
	toggleDisabledStatusAC,
	setTotalUsersCountAC,
	setFilterAC
}

// types
export type UsersReducerActionsType = InferActionsTypes<typeof usersActions>