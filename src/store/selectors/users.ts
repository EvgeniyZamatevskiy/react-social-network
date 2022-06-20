import { UsersSupplementedType } from 'store/reducers/users'
import { RootReducerType } from 'store/store'

export const selectUsers = (state: RootReducerType): UsersSupplementedType[] => state.users.users
export const selectCount = (state: RootReducerType): number => state.users.count
export const selectPage = (state: RootReducerType): number => state.users.page
export const selectTotalUsersCount = (state: RootReducerType): number => state.users.totalUsersCount
export const selectFilter = (state: RootReducerType): any => state.users.filter