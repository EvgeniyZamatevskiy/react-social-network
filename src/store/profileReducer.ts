import { PROFILE } from 'api/profile'
import { PhotosType, UserProfileType } from 'api/types'
import { Nullable } from 'types'
import { setErrorAC } from './appReducer'
import { ThunkType } from './store'

const initialState: InitialStateType = {
	posts: [
		{
			id: 1,
			likes: 48,
			message: 'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.'
		}
	],
	userProfile: null,
	userStatus: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'profile/ADD-POST':
			const newPost = { id: Date.now(), likes: 0, message: action.message }
			return { ...state, posts: [newPost, ...state.posts] }
		case 'profile/REMOVE-POST':
			return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }
		case 'profile/SET-USER-PROFILE':
			return { ...state, userProfile: action.userProfile }
		case 'profile/SET-USER-STATUS':
			return { ...state, userStatus: action.userStatus }
		case 'profile/UPDATE-USER-PHOTO':
			return { ...state, userProfile: { ...state.userProfile, photos: action.photos } as UserProfileType }
		case 'profile/UPDATE-USER-PROFILE':
			return { ...state, userProfile: action.updatedUserProfile }

		default:
			return state
	}
}

// actionsCreators
export const addPostAC = (message: string) => ({ type: 'profile/ADD-POST', message } as const)

export const removePostAC = (postId: number) => ({ type: 'profile/REMOVE-POST', postId } as const)

export const setUserProfileAC = (userProfile: UserProfileType) => ({ type: 'profile/SET-USER-PROFILE', userProfile } as const)

export const setUserStatusAC = (userStatus: string) => ({ type: 'profile/SET-USER-STATUS', userStatus } as const)

export const updateUserPhotoAC = (photos: PhotosType) => ({ type: 'profile/UPDATE-USER-PHOTO', photos } as const)

export const updateUserProfileAC = (updatedUserProfile: UserProfileType) => ({ type: 'profile/UPDATE-USER-PROFILE', updatedUserProfile } as const)

// thunkCreators
export const getUserProfileTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		const response = await PROFILE.getUsersProfile(userId)
		const { data: userProfile } = response

		dispatch(setUserProfileAC(userProfile))
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const getUserStatusTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		const response = await PROFILE.getUserStatus(userId)
		const userStatus = response.data

		dispatch(setUserStatusAC(userStatus))
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const updateUserStatusTC = (newStatus: string): ThunkType => async (dispatch) => {
	try {
		const response = await PROFILE.changeUserStatus(newStatus)
		const { resultCode, messages } = response.data

		if (resultCode === 0) {
			dispatch(setUserStatusAC(newStatus))
		} else {
			dispatch(setErrorAC(messages[0]))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const updateUserPhotoTC = (image: File): ThunkType => async (dispatch) => {
	try {
		const response = await PROFILE.updateUserPhoto(image)
		const { data, messages, resultCode } = response.data
		const photos = data.photos

		if (resultCode === 0) {
			dispatch(updateUserPhotoAC(photos))
		} else {
			dispatch(setErrorAC(messages[0]))
		}

	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

export const updateUserProfileTC = (updatedUserProfile: UserProfileType): ThunkType => async (dispatch) => {
	try {
		const response = await PROFILE.updateUserProfile(updatedUserProfile)
		const { resultCode, messages } = response.data

		if (resultCode === 0) {
			dispatch(updateUserProfileAC(updatedUserProfile))
		} else {
			dispatch(setErrorAC(messages[0]))
		}

	} catch (error: any) {
		dispatch(setErrorAC(error.message))
	}
}

// types
export type InitialStateType = {
	posts: PostsType[]
	userProfile: Nullable<UserProfileType>
	userStatus: string
}

export type PostsType = {
	id: number
	likes: number
	message: string
}

export type ProfileReducerActionsType =
	ReturnType<typeof addPostAC> |
	ReturnType<typeof removePostAC> |
	ReturnType<typeof setUserProfileAC> |
	ReturnType<typeof setUserStatusAC> |
	ReturnType<typeof updateUserPhotoAC> |
	ReturnType<typeof updateUserProfileAC>
