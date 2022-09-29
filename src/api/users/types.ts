export type UsersResponseType = {
  items: UserType[]
  totalCount: number
  error?: any
}

export type UserType = {
  name: string
  id: number
  uniqueUrlName?: string
  photos: PhotoType
  status: string
  followed: boolean
}

export type PhotoType = {
  small: string
  large: string
}
