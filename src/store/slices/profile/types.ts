import { UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'

export type ProfileSliceInitialStateType = {
	posts: PostsType[]
	userProfile: Nullable<UserProfileType>
	userStatus: string
}

export type PostsType = {
	id: number
	like: number
	message: string
}
