import React, {FC, useState} from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import {ReturnComponentType} from "types"
import {useSelector} from "react-redux"
import {selectCaptchaUrl, selectIsAuth, selectIsDisabled, selectIsLoading} from "store/selectors"
import {InputType} from "components/common/eye/types"
import {ErrorCircle, Eye, SmallLoader} from "components"
import {LoginDataType} from "api/auth/types"
import {useAppDispatch} from "hooks"
import {login} from "store/asyncActions"
import {Navigate} from "react-router-dom"
import {Path} from "enums"
import style from "./Login.module.scss"

export const Login: FC = (): ReturnComponentType => {
  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)
  const captchaUrl = useSelector(selectCaptchaUrl)
  const isLoading = useSelector(selectIsLoading)
  const isDisabled = useSelector(selectIsDisabled)

  const [inputType, setInputType] = useState<InputType>("password")


  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm<LoginDataType>({
    mode: "onChange",
    defaultValues: {email: "free@samuraijs.com", password: "free"}
  })

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
    return <Navigate to={Path.PROFILE}/>
  }

  return (
    <div className={style.login}>
      <div
        className={style.container}
      >
        <h2 className={style.title}>welcome</h2>

        <form
          noValidate
          className={style.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style.emailInputContainer}>
            <input
              className={`${style.emailInput} ${errorEmailMessage && style.errorEmailInput}`}
              placeholder="Enter email"
              type="email"
              {...register("email", emailSettings)}
            />
            {errors?.email && (
              <>
                <ErrorCircle/>
                <p className={style.errorEmailMessage}>{errorEmailMessage}</p>
              </>
            )}
          </div>

          <div className={style.passwordInputContainer}>
            <input
              className={`${style.passwordInput} ${errorPasswordMessage && style.errorPasswordInput} `}
              type={inputType}
              placeholder="Enter password"
              {...register("password", passwordSettings)}
            />
            <Eye
              inputType={inputType}
              setInputType={setInputType}
              errorPasswordMessage={errorPasswordMessage}
            />

            {errors?.password && (
              <>
                <ErrorCircle/>
                <p className={style.errorPasswordMessage}>
                  {errorPasswordMessage}
                </p>
              </>
            )}
          </div>

          <label className={style.label}>
            <input
              className={style.rememberMeCheckbox}
              type="checkbox"
              {...register("rememberMe")}
            />
            <span className={style.rememberMe}>Remember me</span>
          </label>

          {captchaUrl && (
            <div className={style.captcha}>
              <img className={style.captchaImage} src={captchaUrl}/>
              <input
                className={style.captchaInput}
                type="text"
                placeholder="Code from the picture"
                {...register("captcha")}
              />
            </div>
          )}

          <button
            className={style.loginBtn}
            disabled={!isValid || isDisabled}
            type="submit"
          >
            {isLoading ? (
              <SmallLoader darkColor={"#000"} lightColor={"#fff"}/>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
