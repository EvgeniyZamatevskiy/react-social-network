import { UserProfileType } from 'api/profile/types'
import { PhotosType } from 'api/types'

export const addPostAC = (message: string) => ({ type: 'profile/ADD-POST', message } as const)

export const removePostAC = (postId: number) => ({ type: 'profile/REMOVE-POST', postId } as const)

export const setUserProfileAC = (userProfile: UserProfileType) => ({ type: 'profile/SET-USER-PROFILE', userProfile } as const)

export const setUserStatusAC = (userStatus: string) => ({ type: 'profile/SET-USER-STATUS', userStatus } as const)

export const updateUserPhotoAC = (photos: PhotosType) => ({ type: 'profile/UPDATE-USER-PHOTO', photos } as const)

export const updateUserProfileAC = (updatedUserProfile: UserProfileType) => ({ type: 'profile/UPDATE-USER-PROFILE', updatedUserProfile } as const)
