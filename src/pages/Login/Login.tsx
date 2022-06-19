import React from 'react'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getIsAuth, getCaptchaUrl } from 'store/selectors/auth'
import { FormikErrorType } from './types'
import { ReturnComponentType } from 'types'
import { useActions } from 'store/hooks/useActions/useActions'
import { authActionCreators } from 'store/actions'

export const Login = ({ }): ReturnComponentType => {

	const { loginTC } = useActions(authActionCreators)
	const isAuth = useSelector(getIsAuth)
	const captchaUrl = useSelector(getCaptchaUrl)

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false,
			captcha: ''
		},
		validate: (values) => {
			const errors: FormikErrorType = {}
			if (!values.email) {
				errors.email = 'Email is required'
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address'
			}

			if (!values.password) {
				errors.password = 'Password is required'
			} else if (values.password.length < 3) {
				errors.password = 'Password must be more than 3 characters!'
			}

			return errors
		},
		onSubmit: values => {
			loginTC(values)
			// formik.resetForm()
		},
	})

	if (isAuth) {
		return <Redirect to={'/profile'} />
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<input type={'text'} placeholder={'Email'}
						{...formik.getFieldProps('email')} />
					{formik.touched.email && formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
				</div>
				<div>
					<input type='password' placeholder={'Password'}
						{...formik.getFieldProps('password')} />
					{formik.touched.password && formik.errors.password && <div style={{ color: 'red' }}>{formik.errors.password}</div>}
				</div>
				{captchaUrl && <img src={captchaUrl} />}
				{captchaUrl && <input placeholder={'captcha'} {...formik.getFieldProps('captcha')} />}
				<div>
					<input type={'checkbox'}
						{...formik.getFieldProps('rememberMe')} />remember me
				</div>
				<div>
					<button type={'submit'}>Login</button>
				</div>
			</form>
		</div>
	)
}
