import { Path } from 'enums'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Navbar.module.scss'

export const Navbar: FC = (): ReturnComponentType => {
	return (
		<div className={style.navBar}>
			<ul className={style.list}>
				<li><NavLink to={Path.profile}>Profile</NavLink></li>
				<li><NavLink to={Path.users}>Users</NavLink></li>
				<li><NavLink to={Path.login}>Login</NavLink></li>
			</ul>
		</div>
	)
}
