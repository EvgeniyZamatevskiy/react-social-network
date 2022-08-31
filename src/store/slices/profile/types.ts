import { UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'

export type ProfileSliceInitialStateType = {
	posts: PostType[]
	userProfile: Nullable<UserProfileType>
	userStatus: string
}

export type PostType = {
	id: number
	like: number
	message: string
}
