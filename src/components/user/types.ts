import { PhotoType } from 'api/users/types'

export type UserPropsType = {
	id: number
	followed: boolean
	name: string
	photos: PhotoType
	status: string
}
