import { ResponseCode } from 'enums'

export type CommonResponseType<T = {}> = {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: ResponseCode
}

export type PhotoType = {
  small: string
  large: string
}
