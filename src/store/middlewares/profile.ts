import { PROFILE } from 'api'
import { UserProfileType } from 'api/profile/types'
import { ERROR_MESSAGE } from 'constants/base'
import { ResponseCode } from 'enums'
import { setIsLoadingAC, setUserProfileAC, setErrorAC, setUserStatusAC, updateUserPhotoAC, updateUserProfileAC } from 'store/actions'
import { ThunkType } from 'store/store'

export const getUserProfileTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const response = await PROFILE.getUsersProfile(userId)
		const { data: userProfile } = response

		dispatch(setUserProfileAC(userProfile))
		dispatch(setIsLoadingAC(false))
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
	}
}

export const getUserStatusTC = (userId: number): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const response = await PROFILE.getUserStatus(userId)
		const userStatus = response.data

		dispatch(setUserStatusAC(userStatus))
		dispatch(setIsLoadingAC(false))
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
	}
}

export const updateUserStatusTC = (newStatus: string): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const response = await PROFILE.changeUserStatus(newStatus)
		const { resultCode, messages } = response.data

		if (resultCode === ResponseCode.Success) {
			dispatch(setUserStatusAC(newStatus))
			dispatch(setIsLoadingAC(false))
		} else {
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
			dispatch(setIsLoadingAC(false))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
	}
}

export const updateUserPhotoTC = (image: File): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const response = await PROFILE.updateUserPhoto(image)
		const { data, resultCode, messages } = response.data
		const photos = data.photos

		if (resultCode === ResponseCode.Success) {
			dispatch(updateUserPhotoAC(photos))
			dispatch(setIsLoadingAC(false))
		} else {
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
			dispatch(setIsLoadingAC(false))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
	}
}

export const updateUserProfileTC = (updatedUserProfile: UserProfileType): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const response = await PROFILE.updateUserProfile(updatedUserProfile)
		const { resultCode, messages } = response.data

		if (resultCode === ResponseCode.Success) {
			dispatch(updateUserProfileAC(updatedUserProfile))
			dispatch(setIsLoadingAC(false))
		} else {
			dispatch(setErrorAC(messages[ERROR_MESSAGE]))
			dispatch(setIsLoadingAC(false))
		}
	} catch (error: any) {
		dispatch(setErrorAC(error.message))
		dispatch(setIsLoadingAC(false))
	}
}