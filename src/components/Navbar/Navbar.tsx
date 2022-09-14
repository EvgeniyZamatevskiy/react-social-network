import React, { FC } from 'react'
import { Path } from 'enums'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './NavBar.module.scss'
import { CustomLink } from 'components/common/customLink/CustomLink'

export const NavBar: FC = (): ReturnComponentType => {
	return (
		<div className={style.navBar}>
			<ul className={style.list}>
				<li>
					<CustomLink to={Path.PROFILE} colorActiveLink='rgb(196, 196, 196)'>Profile</CustomLink>
				</li>
				<li>
					<CustomLink to={Path.USERS} colorActiveLink='rgb(196, 196, 196)'>Users</CustomLink>
				</li>
				<li>
					<CustomLink to={Path.CHAT} colorActiveLink='rgb(196, 196, 196)'>Chat</CustomLink>
				</li>
			</ul>
		</div>
	)
}
