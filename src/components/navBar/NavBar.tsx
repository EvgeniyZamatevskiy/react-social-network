import { Path } from 'enums'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { Icon16MessageOutline } from '@vkontakte/icons'
import { Icon16Users2Outline } from '@vkontakte/icons'
import { Icon20UserCircleOutline } from '@vkontakte/icons'
import style from './NavBar.module.scss'

export const NavBar: FC = (): ReturnComponentType => {
	return (
		<div className={style.container}>
			<div className={style.navBar}>
				<Link className={style.link} to={Path.PROFILE}>
					<Icon20UserCircleOutline className={style.icon} height={20} width={20} />
					My page
				</Link>
				<Link className={style.link} to={Path.MESSAGES}>
					<Icon16MessageOutline className={style.icon} height={20} width={20} />
					Messages
				</Link>
				<Link className={style.link} to={Path.USERS}>
					<Icon16Users2Outline className={style.icon} height={20} width={20} />
					Users
				</Link>
			</div>
		</div>
	)
}
