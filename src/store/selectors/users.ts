import { UserType } from 'api/types'
import { RootReducerType } from 'store/store'
import { FilterType } from 'store/usersReducer'

export const selectUsers = (state: RootReducerType): UserType[] => state.users.users
export const selectCount = (state: RootReducerType): number => state.users.count
export const selectPage = (state: RootReducerType): number => state.users.page
export const selectTotalCount = (state: RootReducerType): number => state.users.totalCount
export const selectFilter = (state: RootReducerType): FilterType => state.users.filter
