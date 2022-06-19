import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { authActionCreators } from 'store/action-creators'
import { getLogin, getIsAuth } from 'store/selectors/auth'
import { useActions } from '../../store/hooks'
import { UniversalButton } from '../common/UniversalButton/UniversalButton'
import s from './Header.module.css'

type HeaderPropsType = {

}

export const Header: FC<HeaderPropsType> = ({ }) => {

	const login = useSelector(getLogin)
	const isAuth = useSelector(getIsAuth)
	const { logoutTC } = useActions(authActionCreators)

	const logoutHandler = () => {
		logoutTC()
	}

	return (
		<header className={s.header}>
			<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
			<div className={s.loginBlock}>
				{isAuth && login}
				{isAuth && <UniversalButton onClick={logoutHandler}>Log Out</UniversalButton>}
			</div>
		</header>
	)
}