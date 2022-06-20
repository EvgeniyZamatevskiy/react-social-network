import React, { FC } from 'react'
import { UniversalButton } from 'components/common'
import { useSelector } from 'react-redux'
import { selectLogin, selectIsAuth } from 'store/selectors'
import { ReturnComponentType } from 'types'
import style from './style/Header.module.css'
import { useTypedDispatch } from 'store/hooks'
import { logoutTC } from 'store/middlewares'

export const Header: FC = ({ }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const login = useSelector(selectLogin)
	const isAuth = useSelector(selectIsAuth)

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
