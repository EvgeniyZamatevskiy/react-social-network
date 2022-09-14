import { FilterType } from 'store/slices/users/types'
import { RootStateType } from 'store'
import { UserType } from 'api/users/types'

export const selectUsers = (state: RootStateType): UserType[] => state.users.users

export const selectCount = (state: RootStateType): number => state.users.count

export const selectPage = (state: RootStateType): number => state.users.page

export const selectTotalCount = (state: RootStateType): number => state.users.totalCount

export const selectFilter = (state: RootStateType): FilterType => state.users.filter

export const selectDisabledUserId = (state: RootStateType): number[] => state.users.disabledUserId
