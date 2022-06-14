import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

type HeaderPropsType = {

}

export const Header: FC<HeaderPropsType> = ({ }) => {
	return (
		<header className={s.header}>
			<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
			<div className={s.loginBlock}>
				<NavLink to=''>Login</NavLink>
			</div>
		</header>
	)
}