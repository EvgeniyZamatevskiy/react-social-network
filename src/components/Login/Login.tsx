import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Login.module.scss'
import user from 'assets/images/user.png'
import { useForm } from 'react-hook-form'
import { useTypedDispatch } from 'store/hooks'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Path } from 'enums'

export type DataType = {
	email: string,
	password: string,
	rememberMe: boolean
}

type LoginPropsType = {

}

export const Login: FC<LoginPropsType> = ({ }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const { register, handleSubmit, reset, formState: { errors }, } = useForm<any>({
		mode: 'onBlur',
	})

	const onSubmit: any = (data: DataType): void => {
		console.log(data)
		// reset()
	}

	return (
		<form className={style.formBox} onSubmit={handleSubmit(onSubmit)}>
			<img src={user} className={style.user} />
			<h1 className={style.title}>Welcome</h1>
			<input type={'text'} placeholder={'Email'}
				{...register('email', {
					required: 'Field is required!',
					pattern: { value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: 'Incorrect email!', }
				})} />
			{errors?.email && <p style={{ color: 'red' }}>{errors?.email.message}</p>}
			<input type={'password'} placeholder={'Password'}
				{...register('password', {
					required: 'Field is required!',
				})} />
			{errors?.password && <p style={{ color: 'red', marginBottom: "20px" }}>{errors?.password.message}</p>}
			<input type={'checkbox'}
				{...register('rememberMe')} />
			<span className={style.rememberMe}>Remember me</span>
			<button type={'submit'} >Login</button>
		</form>
	)
}
