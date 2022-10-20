import {RootStateType} from "store"
import {FriendValuesType, UserSupplementedType} from "store/slices/users/types"

export const selectUsers = (state: RootStateType): UserSupplementedType[] => state.users.users

export const selectTotalUsersCount = (state: RootStateType): number => state.users.totalUsersCount

export const selectIsLoadingUsers = (state: RootStateType): boolean => state.users.isLoadingUsers

export const selectTerm = (state: RootStateType): string => state.users.term

export const selectIsLoadingTerm = (state: RootStateType): boolean => state.users.isLoadingTerm

export const selectFriend = (state: RootStateType): FriendValuesType => state.users.friend

export const selectPage = (state: RootStateType): number => state.users.page

export const selectPageCount = (state: RootStateType): number => state.users.pageCount

export const selectIsFollowed = (state: RootStateType): boolean => state.users.isFollowed

export const selectIsLoadingFollowed = (state: RootStateType): boolean => state.users.isLoadingFollowed

export const selectIsDisabledFollowed = (state: RootStateType): boolean => state.users.isDisabledFollowed
