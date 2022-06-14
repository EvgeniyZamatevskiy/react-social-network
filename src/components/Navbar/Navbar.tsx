import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

type NavbarPropsType = {

}

export const Navbar: FC<NavbarPropsType> = ({ }) => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/profile/2'>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs'>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/users'>Users</NavLink>
			</div>
		</nav>
	)
}