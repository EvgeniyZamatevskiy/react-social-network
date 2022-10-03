import { PhotoType } from '../types'

export type UserProfileType = {
  aboutMe: string
  contacts: ContactType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotoType
}

export type ContactType = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}
