import React, { FC } from 'react'
import { UniversalButton } from 'components/common'
import { useSelector } from 'react-redux'
import { getLogin, getIsAuth } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { useActions } from 'store/hooks/useActions/useActions'
import { authActionCreators } from 'store/actions'
import style from './style/Header.module.css'

export const Header: FC = ({ }): ReturnComponentType => {

	const { logoutTC } = useActions(authActionCreators)

	const login = useSelector(getLogin)
	const isAuth = useSelector(getIsAuth)

	const handleLogOutClick = (): void => {
		logoutTC()
	}

	return (
		<header className={style.header}>
			<div className={style.loginBlock}>
				{isAuth && login}
				{isAuth && <UniversalButton onClick={handleLogOutClick}>Log Out</UniversalButton>}
			</div>
		</header>
	)
}
