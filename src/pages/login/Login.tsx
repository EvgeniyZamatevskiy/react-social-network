import React, { FC } from 'react'
import { LoginParamsType } from 'api/auth/types'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppDispatch } from 'hooks'
import { selectIsAuth, selectCaptchaUrl } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { login } from 'store/asyncActions'
import avatar from 'assets/images/avatar.png'
import style from './Login.module.scss'
import { LocationStateType } from './types'

export const Login: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const location = useLocation()

	const isAuth = useSelector(selectIsAuth)
	const captchaUrl = useSelector(selectCaptchaUrl)

	const fromPage = (location.state as LocationStateType)?.from?.pathname || '/'

	const { register, handleSubmit, formState: { errors } } = useForm<LoginParamsType>({
		mode: 'onBlur',
		defaultValues: { email: 'free@samuraijs.com', password: 'free' }
	},
	)

	const emailSettings = {
		required: 'Field is required!',
		pattern: {
			value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			message: 'Incorrect email!',
		}
	}

	const passwordSettings = {
		required: 'Field is required!',
	}

	const onSubmit: SubmitHandler<LoginParamsType> = (data): void => {
		dispatch(login(data))
	}

	if (isAuth) {
		return <Navigate to={fromPage} />
	}

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			<img className={style.userImage} src={avatar} />
			<h1>Welcome</h1>
			<input
				className={style.email}
				type='text'
				placeholder='Email'
				{...register('email', emailSettings)} />
			{errors?.email && <p className={style.emailError}>{errors?.email.message}</p>}
			<input
				className={style.password}
				type='password'
				placeholder='Password'
				{...register('password', passwordSettings)} />
			{errors?.password && <p className={style.passwordError}>{errors?.password.message}</p>}
			<input
				className={`${style.rememberMe} ${captchaUrl && style.secondaryRememberMe}`}
				type='checkbox'
				{...register('rememberMe')} />
			{captchaUrl &&
				<div>
					<img src={captchaUrl} />
					<input
						className={style.captcha}
						type='text'
						{...register('captcha')} />
				</div>
			}
			<span>Remember me</span>
			<button type='submit'>Login</button>
		</form>
	)
}
