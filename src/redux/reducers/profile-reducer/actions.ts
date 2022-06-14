import { profileAPI, UserProfileResponseType } from '../../../api/profileAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const addPostAC = (postTitle: string) => ({ type: 'ADD-POST', postTitle } as const)

export const setUserProfileAC = (userProfile: UserProfileResponseType) => ({ type: 'SET-USER-PROFILE', userProfile } as const)

// ThunkCreators
export const getUserProfileTC = (userId: string): ThunkType => async (dispatch) => {
	try {
		const res = await profileAPI.getUserProfile(userId)
		dispatch(setUserProfileAC(res.data))
	} catch (error: any) {
		alert(error.message)
	}
}

export const profileAsyncActions = {
	getUserProfileTC
}

export const profileActions = {
	addPostAC,
	setUserProfileAC,
}

// types
export type ProfileReducerActionsType = AddPostActionType | SetUserProfileActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>