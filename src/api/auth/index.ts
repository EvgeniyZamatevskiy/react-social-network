import {instance} from "api/config"
import {CommonResponseType} from "api/types"
import {AuthorizedUserType, LoginDataType} from "./types"

export const AUTH = {
  me() {
    return instance.get<CommonResponseType<AuthorizedUserType>>("auth/me")
  },
  login(loginData: LoginDataType) {
    return instance.post<CommonResponseType<{ userId: string }>>("auth/login", loginData)
  },
  logOut() {
    return instance.delete<CommonResponseType>("auth/login")
  },
  getCaptchaUrl() {
    return instance.get<{ url: string }>("security/get-captcha-url")
  },
}
