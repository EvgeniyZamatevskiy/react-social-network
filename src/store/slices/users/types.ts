import { UserType } from 'api/users/types'

export type UsersSliceInitialStateType = {
	users: UserSupplementedType[]
	totalUsersCount: number
	isLoadingUsers: boolean
}

export type UserSupplementedType = UserType & {
	followedStatus: FollowedStatusType
}

export type FollowedStatusType = {
	isDisabled: boolean
	isLoading: boolean
}
