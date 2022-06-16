import { profileAPI, UserProfileResponseType } from '../../../api/profileAPI'
import { PhotosType } from '../../../api/usersAPI'
import { ThunkType } from '../../store'

// ActionCreators
export const addPostAC = (postTitle: string) => ({ type: 'ADD-POST', postTitle } as const)

export const setUserProfileAC = (userProfile: UserProfileResponseType) => ({ type: 'SET-USER-PROFILE', userProfile } as const)

export const setUserStatusAC = (status: string) => ({ type: 'SET-USER-STATUS', status } as const)

export const savePhotoAC = (photos: PhotosType) => ({ type: 'SAVE-PHOTO', photos } as const)


// ThunkCreators
export const getUserProfileTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		const res = await profileAPI.getUserProfile(userId)
		dispatch(setUserProfileAC(res.data))
	} catch (error: any) {
		alert(error.message)
	}
}

export const getStatusTC = (userId: number): ThunkType => async (dispatch) => {
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

export const savePhotoTC = (file: File): ThunkType => async (dispatch) => {
	try {
		const res = await profileAPI.savePhoto(file)
		if (res.data.resultCode === 0) {
			dispatch(savePhotoAC(res.data.data.photos))
		} else {
			alert(res.data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const saveProfileTC = (profile: UserProfileResponseType): ThunkType => async (dispatch, getState) => {
	const userId = getState().auth.id

	try {
		const res = await profileAPI.saveProfile(profile)
		if (res.data.resultCode === 0) {
			dispatch(getUserProfileTC(userId!))
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
	getStatusTC,
	savePhotoTC,
	saveProfileTC
}

export const profileActions = {
	addPostAC,
	setUserProfileAC,
	setUserStatusAC,
	savePhotoAC
}

// types
export type ProfileReducerActionsType =
	AddPostActionType | SetUserProfileActionType | SetUserStatusActionType |
	SavePhotoActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
type SetUserStatusActionType = ReturnType<typeof setUserStatusAC>
type SavePhotoActionType = ReturnType<typeof savePhotoAC>