import { AuthorizedUserType } from 'api/auth/types'
import { Nullable } from 'types'

export type AuthSliceInitialStateType = {
  authorizedUser: Nullable<AuthorizedUserType>
  isAuth: boolean
  captchaUrl: string
}
