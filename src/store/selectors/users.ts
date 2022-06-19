import { UsersSupplementedType } from 'store/reducers/usersReducer'
import { RootReducerType } from 'store/store'

export const getUsers = (state: RootReducerType): UsersSupplementedType[] => state.users.users
export const getCount = (state: RootReducerType): number => state.users.count
export const getPage = (state: RootReducerType): number => state.users.page
export const getTotalUsersCount = (state: RootReducerType): number => state.users.totalUsersCount
export const getFilter = (state: RootReducerType): any => state.users.filter