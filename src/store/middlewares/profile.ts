import { profileAPI } from "api"
import { UserProfileResponseType } from "api/profileAPI/types"
import { setUserProfileAC, setUserStatusAC, savePhotoAC } from "store/actions/profile/profile"
import { ThunkType } from "store/store"

export const getUserProfileTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		const data = await profileAPI.getUserProfile(userId)
		dispatch(setUserProfileAC(data))
	} catch (error: any) {
		alert(error.message)
	}
}

export const getStatusTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		const data = await profileAPI.getStatus(userId)
		dispatch(setUserStatusAC(data))
	} catch (error: any) {
		alert(error.message)
	}
}

export const updateUserStatusTC = (newStatus: string): ThunkType => async (dispatch) => {
	try {
		const data = await profileAPI.updateUserStatus(newStatus)
		if (data.resultCode === 0) {
			dispatch(setUserStatusAC(newStatus))
		} else {
			alert(data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const savePhotoTC = (file: File): ThunkType => async (dispatch) => {
	try {
		const data = await profileAPI.savePhoto(file)
		if (data.resultCode === 0) {
			dispatch(savePhotoAC(data.data.photos))
		} else {
			alert(data.messages[0])
		}
	} catch (error: any) {
		alert(error.message)
	}
}

export const saveProfileTC = (profile: UserProfileResponseType): ThunkType => async (dispatch, getState) => {
	const userId = getState().auth.id

	try {
		const data = await profileAPI.saveProfile(profile)
		if (data.resultCode === 0) {
			dispatch(getUserProfileTC(userId!))
		} else {
			alert(data.messages[0])
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