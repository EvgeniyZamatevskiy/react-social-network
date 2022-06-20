import React, { FC } from 'react'
import { UniversalButton } from 'components/common'
import { useSelector } from 'react-redux'
import { getLogin, getIsAuth } from 'store/selectors'
import { ReturnComponentType } from 'types'
import style from './style/Header.module.css'
import { useTypedDispatch } from 'store/hooks'
import { logoutTC } from 'store/middlewares'

export const Header: FC = ({ }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const login = useSelector(getLogin)
	const isAuth = useSelector(getIsAuth)

	const handleLogOutClick = (): void => {
		dispatch(logoutTC())
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
