import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Login.module.scss'
import bgImg from 'assets/images/bgImg.jpg'
import user from 'assets/images/user.png'

type LoginPropsType = {

}

export const Login: FC<LoginPropsType> = ({ }): ReturnComponentType => {

	return (
		<div className={style.loginBlock}>
			<div className={style.formContainer}>
				<img src={bgImg} className={style.bgImg} />
				<form className={style.formBox}>
					<img src={user} className={style.user} />
					<h1 className={style.title}>Welcome</h1>
					<input type={'text'} placeholder={'Email'} />
					{/* <div style={{ color: 'red' }}>Title is required!</div> */}
					<input type={'password'} placeholder={'Password'} />
					{/* <div style={{ color: 'red', marginBottom: "20px" }}>Title is required!</div> */}
					<input type={'checkbox'} />
					<span className={style.rememberMe}>Remember me</span>
					<button type={'submit'} >Login</button>
				</form>
			</div>
		</div>
	)
}
