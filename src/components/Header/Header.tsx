import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../redux/hooks'
import { authActionCreators } from '../../redux/reducers/auth-reducer'
import { selectIsAuth, selectLogin } from '../../redux/reducers/auth-reducer/selectors'
import s from './Header.module.css'

type HeaderPropsType = {

}

export const Header: FC<HeaderPropsType> = ({ }) => {

	const login = useSelector(selectLogin)
	const isAuth = useSelector(selectIsAuth)
	const { logoutTC } = useActions(authActionCreators)

	const logoutHandler = () => {
		logoutTC()
	}

	return (
		<header className={s.header}>
			<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
			<div className={s.loginBlock}>
				{isAuth && login}
				{isAuth && <button onClick={logoutHandler}>Logout</button>}
			</div>
		</header>
	)
}