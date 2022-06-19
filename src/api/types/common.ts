export type CommonResponseType<T = {}> = {
	data: T
	messages: string[]
	fieldsErrors: string[]
	resultCode: number
}

export type PhotosType = {
	small: string | null
	large: string | null
}