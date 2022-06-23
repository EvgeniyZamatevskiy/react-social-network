import { ResponseCode } from 'enums/ResponseCode'

export type CommonResponseType<T = {}> = {
	data: T,
	fieldsErrors: string[],
	messages: string[],
	resultCode: ResponseCode
}
