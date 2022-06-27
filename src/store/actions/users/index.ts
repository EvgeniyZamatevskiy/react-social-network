import { UserType } from 'api/users/types'
import { FilterType } from 'store/reducers/users/types'

export const setUsersAC = (users: UserType[]) => ({ type: 'users/SET-USERS', users } as const)

export const setTotalCountAC = (totalCount: number) => ({ type: 'users/SET-TOTAL-COUNT', totalCount } as const)

export const setPageAC = (page: number) => ({ type: 'users/SET-PAGE', page } as const)

export const setFilterAC = (filter: FilterType) => ({ type: 'users/SET-FILTER', payload: filter } as const)

export const followAC = (userId: number) => ({ type: 'users/FOLLOW', userId } as const)

export const unfollowAC = (userId: number) => ({ type: 'users/UNFOLLOW', userId } as const)

export const setDisabledStatusAC = (userId: number, isDisabled: boolean) => ({ type: 'users/SET-DISABLED-STATUS', userId, isDisabled } as const)
