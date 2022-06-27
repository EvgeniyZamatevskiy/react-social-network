import { UserProfileType } from 'api/profile/types'
import { addPostAC, removePostAC, setUserProfileAC, setUserStatusAC, updateUserPhotoAC, updateUserProfileAC } from 'store/actions/profile'
import { Nullable } from 'types'

export type InitialStateType = {
	posts: PostsType[]
	userProfile: Nullable<UserProfileType>
	userStatus: string
}

export type PostsType = {
	id: number
	like: number
	message: string
}

export type ProfileReducerActionsType =
	ReturnType<typeof addPostAC> |
	ReturnType<typeof removePostAC> |
	ReturnType<typeof setUserProfileAC> |
	ReturnType<typeof setUserStatusAC> |
	ReturnType<typeof updateUserPhotoAC> |
	ReturnType<typeof updateUserProfileAC>
