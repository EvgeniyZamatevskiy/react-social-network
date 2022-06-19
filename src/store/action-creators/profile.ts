import { PhotosType } from "api/types/common"
import { UserProfileResponseType } from "api/types/profile"
import { InferActionsTypes } from "store/store"

export const addPostAC = (postTitle: string) => ({ type: 'ADD-POST', postTitle } as const)

export const setUserProfileAC = (userProfile: UserProfileResponseType) => ({ type: 'SET-USER-PROFILE', userProfile } as const)

export const setUserStatusAC = (status: string) => ({ type: 'SET-USER-STATUS', status } as const)

export const savePhotoAC = (photos: PhotosType) => ({ type: 'SAVE-PHOTO', photos } as const)

export const profileActions = {
	addPostAC,
	setUserProfileAC,
	setUserStatusAC,
	savePhotoAC
}

// types
export type ProfileReducerActionsType = InferActionsTypes<typeof profileActions>