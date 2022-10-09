import { RootStateType } from 'store'
import { ContactType, UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'
import { PostType } from '../slices/profile/types'

export const selectStatus = (state: RootStateType): string =>
  state.profile.status

export const selectUserProfile = (
  state: RootStateType
): Nullable<UserProfileType> => state.profile!?.userProfile

export const selectUserId = (state: RootStateType): number =>
  state.profile.userProfile!?.userId

export const selectPhotoSmall = (state: RootStateType): string =>
  state.profile.userProfile!?.photos.small

export const selectPhotoLarge = (state: RootStateType): string =>
  state.profile.userProfile!?.photos.large

export const selectAboutMe = (state: RootStateType): string =>
  state.profile.userProfile!?.aboutMe

export const selectFullName = (state: RootStateType): string =>
  state.profile.userProfile!?.fullName

export const selectLookingForAJob = (state: RootStateType): boolean =>
  state.profile.userProfile!?.lookingForAJob

export const selectLookingForAJobDescription = (state: RootStateType): string =>
  state.profile.userProfile!?.lookingForAJobDescription

export const selectContacts = (state: RootStateType): ContactType =>
  state.profile.userProfile!?.contacts

export const selectPosts = (state: RootStateType): PostType[] =>
  state.profile.posts

export const selectSearchPostsMessage = (state: RootStateType): string =>
  state.profile.searchPostsMessage
