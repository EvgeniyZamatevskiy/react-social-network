import { UserType } from 'api/users/types'

export type UsersSliceInitialStateType = {
	users: UserType[]
	totalUsersCount: number
	isLoadingUsers: boolean
	isLoadingFollowStatus: boolean
	usersId: number[]
}
