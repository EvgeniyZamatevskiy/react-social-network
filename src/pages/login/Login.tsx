import React, {FC, useState} from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import {ReturnComponentType} from "types"
import {useSelector} from "react-redux"
import {selectCaptchaUrl, selectIsAuth, selectIsDisabled, selectIsLoading} from "store/selectors"
import {InputType} from "components/common/eye/types"
import {Eye, SmallLoader} from "components"
import {LoginDataType} from "api/auth/types"
import {useAppDispatch} from "hooks"
import {login} from "store/asyncActions"
import {Navigate, useLocation} from "react-router-dom"
import {Icon20ErrorCircleOutline} from "@vkontakte/icons"
import {LocationStateType} from "./types"
import style from "./Login.module.scss"

export const Login: FC = (): ReturnComponentType => {

  const location = useLocation()

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)
  const captchaUrl = useSelector(selectCaptchaUrl)
  const isLoading = useSelector(selectIsLoading)
  const isDisabled = useSelector(selectIsDisabled)

  const [inputType, setInputType] = useState<InputType>("password")

  const {register, handleSubmit, formState: {errors, isValid}} = useForm<LoginDataType>({
    mode: "onChange",
    defaultValues: {email: "free@samuraijs.com", password: "free"}
  })

  const fromPage = (location.state as LocationStateType)?.from?.pathname || "/"
  const errorEmailMessage = errors?.email?.message
  const errorPasswordMessage = errors?.password?.message
  const emailSettings = {
    required: "Field is required",
    pattern: {
      value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      message: "Incorrect email"
    }
  }
  const passwordSettings = {
    required: "Field is required",
    maxLength: {value: 64, message: "Max 64 characters"}
  }

  const onSubmit: SubmitHandler<LoginDataType> = (loginData): void => {
    dispatch(login(loginData))
  }

  if (isAuth) {
    return <Navigate to={fromPage}/>
  }

  return (
    <div className={style.login}>
      <div className={style.container}>
        <h2>welcome</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.emailInputContainer}>
            <input
              className={`${style.emailInput} ${errorEmailMessage && style.errorEmailInput}`}
              placeholder="Enter email"
              type="email"
              {...register("email", emailSettings)}
            />
            {errors?.email &&
              <>
                <Icon20ErrorCircleOutline className={style.errorCircle} width={18.86} height={18.86}/>
                <p className={style.errorEmailMessage}>{errorEmailMessage}</p>
              </>}
          </div>

          <div className={style.passwordInputContainer}>
            <input
              className={`${style.passwordInput} ${errorPasswordMessage && style.errorPasswordInput} `}
              type={inputType}
              placeholder="Enter password"
              {...register("password", passwordSettings)}
            />
            <Eye type={inputType} setType={setInputType} errorPasswordMessage={errorPasswordMessage}/>

            {errors?.password &&
              <>
                <Icon20ErrorCircleOutline className={style.errorCircle} width={18.86} height={18.86}/>
                <p className={style.errorPasswordMessage}>
                  {errorPasswordMessage}
                </p>
              </>}
          </div>

          <label>
            <input className={style.checkbox} type="checkbox"{...register("rememberMe")}/>
            <span>Remember me</span>
          </label>

          {captchaUrl &&
            <div className={style.captcha}>
              <img src={captchaUrl} alt="captcha url"/>
              <input
                className={style.captchaInput}
                type="text"
                placeholder="Code from the picture"
                {...register("captcha")}
              />
            </div>}

          <button className={style.loginButton} disabled={!isValid || isDisabled} type="submit">
            {isLoading ? <SmallLoader/> : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}
