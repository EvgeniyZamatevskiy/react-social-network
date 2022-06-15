import { profileAPI, UserProfileResponseType } from '../../../api/profileAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const addPostAC = (postTitle: string) => ({ type: 'ADD-POST', postTitle } as const)

export const setUserProfileAC = (userProfile: UserProfileResponseType) => ({ type: 'SET-USER-PROFILE', userProfile } as const)

export const setUserStatusAC = (status: string) => ({ type: 'SET-USER-STATUS', status } as const)


// ThunkCreators
export const getUserProfileTC = (userId: any): ThunkType => async (dispatch) => {
	try {
		const res = await profileAPI.getUserProfile(userId)
		dispatch(setUserProfileAC(res.data))
	} catch (error: any) {
		alert(error.message)
	}
}

export const getStatusTC = (userId: any): ThunkType => async (dispatch) => {
	try {
		const res = await profileAPI.getStatus(userId)
		dispatch(setUserStatusAC(res.data))
	} catch (error: any) {
		alert(error.message)
	}
}

export const updateUserStatusTC = (newStatus: string): ThunkType => async (dispatch) => {
	try {
		const res = await profileAPI.updateUserStatus(newStatus)
		if (res.data.resultCode === 0) {
			dispatch(setUserStatusAC(newStatus))
		} else {
			alert(res.data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const profileAsyncActions = {
	getUserProfileTC,
	updateUserStatusTC,
	getStatusTC
}

export const profileActions = {
	addPostAC,
	setUserProfileAC,
	setUserStatusAC,
}

// types
export type ProfileReducerActionsType =
	AddPostActionType | SetUserProfileActionType | SetUserStatusActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
type SetUserStatusActionType = ReturnType<typeof setUserStatusAC>