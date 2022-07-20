import React, { FC } from 'react'
import { Path } from 'enums'
import { NavLink } from 'react-router-dom'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './NavBar.module.scss'

export const NavBar: FC = (): ReturnComponentType => {
	return (
		<div className={style.navBar}>
			<ul className={style.list}>
				<li>
					<NavLink to={Path.PROFILE}>Profile</NavLink>
				</li>
				<li>
					<NavLink to={Path.USERS}>Users</NavLink>
				</li>
			</ul>
		</div>
	)
}
