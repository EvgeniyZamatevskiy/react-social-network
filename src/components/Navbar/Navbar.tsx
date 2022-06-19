import React, { FC } from 'react'
import { Path } from 'enums'
import { NavLink } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import style from './style/NavBar.module.css'

export const Navbar: FC = ({ }): ReturnComponentType => {
	return (
		<nav className={style.nav}>
			<div className={style.item}>
				<NavLink to={Path.profile}>Profile</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to={Path.users}>Users</NavLink>
			</div>
		</nav>
	)
}
