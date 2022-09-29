import { AuthorizedUserDataType } from 'api/auth/types'
import { Nullable } from 'types'

export type AuthSliceInitialStateType = {
  authorizedUserData: Nullable<AuthorizedUserDataType>
  isAuth: boolean
  captchaUrl: string
}
