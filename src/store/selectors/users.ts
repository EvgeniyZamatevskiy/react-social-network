import { UserType } from 'api/users/types'
import { RootStateType } from 'store'

export const selectUsers = (state: RootStateType): UserType[] => state.users.users

export const selectTotalUsersCount = (state: RootStateType): number => state.users.totalUsersCount

export const selectIsLoadingUsers = (state: RootStateType): boolean => state.users.isLoadingUsers

export const selectIsLoadingFollowStatus = (state: RootStateType): boolean => state.users.isLoadingFollowStatus
