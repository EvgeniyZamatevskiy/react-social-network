import { RootStateType } from 'store'
import { UserSupplementedType } from 'store/slices/users/types'

export const selectUsers = (state: RootStateType): UserSupplementedType[] => state.users.users

export const selectTotalUsersCount = (state: RootStateType): number => state.users.totalUsersCount

export const selectIsLoadingUsers = (state: RootStateType): boolean => state.users.isLoadingUsers

export const selectTerm = (state: RootStateType): string => state.users.term

export const selectIsLoadingTerm = (state: RootStateType): boolean => state.users.isLoadingTerm
