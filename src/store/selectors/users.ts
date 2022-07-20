import { UsersSupplementedType, FilterType } from 'store/slices/users/types'
import { RootStateType } from 'store'

export const selectUsers = (state: RootStateType): UsersSupplementedType[] => state.users.users
export const selectCount = (state: RootStateType): number => state.users.count
export const selectPage = (state: RootStateType): number => state.users.page
export const selectTotalCount = (state: RootStateType): number => state.users.totalCount
export const selectFilter = (state: RootStateType): FilterType => state.users.filter
