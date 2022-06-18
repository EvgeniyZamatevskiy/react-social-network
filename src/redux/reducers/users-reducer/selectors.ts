import { RootReducerType } from '../../store'

export const selectUsers = (state: RootReducerType) => state.users.users
export const selectCount = (state: RootReducerType) => state.users.count
export const selectPage = (state: RootReducerType) => state.users.page
export const selectTotalUsersCount = (state: RootReducerType) => state.users.totalUsersCount
export const selectFilter = (state: RootReducerType) => state.users.filter