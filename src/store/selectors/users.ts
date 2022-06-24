import { UserType } from 'api/users'
import { RootReducerType } from 'store/store'

export const selectUsers = (state: RootReducerType): UserType[] => state.users.users
