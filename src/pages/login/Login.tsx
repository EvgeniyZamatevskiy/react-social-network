import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ReturnComponentType } from 'types'
import { LoginParamsType } from './types'
import { Icon20ViewOutline } from '@vkontakte/icons'
import { Icon20HideOutline } from '@vkontakte/icons'
import style from './Login.module.scss'

export type InputType = 'password' | 'text'

export const Login: FC = (): ReturnComponentType => {

	const [inputType, setInputType] = useState<InputType>('password')

	const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<LoginParamsType>({
		mode: 'onChange',
		//defaultValues: { email: 'free@samuraijs.com', password: 'free' }
	},
	)

	const emailSettings = {
		required: 'Field is required',
		pattern: {
			value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			message: 'Incorrect email',
		}
	}

	const passwordSettings = {
		required: 'Field is required',
		maxLength: { value: 64, message: 'Max 64 characters' },
	}

	const onSubmit: SubmitHandler<LoginParamsType> = (data): void => {
		//dispatch(login(data))
		console.log(data)
	}

	const setInputTypeTextClick = (): void => setInputType('text')

	const setInputTypePasswordClick = (): void => setInputType('password')

	const captchaUrl = true

	const errorEmailMessage = errors?.email?.message
	const errorPasswordMessage = errors?.password?.message

	return (
		<div className={style.login}>
			<div className={style.container}>
				<h2 className={style.title}>welcome</h2>
				<form noValidate className={style.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={style.loginInputContainer}>
						<input
							className={`${style.loginInput} ${errorEmailMessage && style.errorBorder}`}
							placeholder='Enter email'
							type='email'

							{...register('email', emailSettings)}
						/>

						{errors?.email &&
							<>
								<span className={style.ellipse}>!</span>
								<p className={style.emailError}>{errorEmailMessage}</p>
							</>
						}
					</div>
					<div className={style.passwordInputContainer}>
						<input
							className={`${style.passwordInput} ${errorPasswordMessage && style.errorPasswordInput}`}
							style={errorPasswordMessage ? { paddingRight: '75px' } : {}}
							type={inputType}
							placeholder='Enter password'
							{...register('password', passwordSettings)}
						/>
						{inputType === 'password'
							? <Icon20ViewOutline style={errorPasswordMessage ? { right: '45px' } : {}} className={style.openEye} width={24} height={24} fill={'#76787A'} onClick={setInputTypeTextClick} />
							: <Icon20HideOutline style={errorPasswordMessage ? { right: '45px' } : {}} className={style.openEye} width={24} height={24} fill={'#76787A'} onClick={setInputTypePasswordClick} />}


						{errors?.password &&
							<>
								<span className={style.ellipse}>!</span>
								<p className={style.passwordError}>{errors?.password.message}</p>
							</>
						}
					</div>

					<label className={style.label}>
						<input
							className={style.rememberMeCheckbox}
							type='checkbox'
							{...register('rememberMe')}
						/>
						<span className={style.rememberMe}>Remember me</span>
					</label>
					{!captchaUrl &&
						<div>
							<img src={'https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200&h=100&c=lEHhgzAzs2FjfOovTxSsBw%3D%3D'} />
							<input
								className={style.captchaInput}
								type='text'
								{...register('captcha')} />
						</div>
					}
					<button disabled={!isValid} className={style.loginBtn} type='submit'>Login</button>
				</form>
			</div>
		</div>
	)
}
