import React, { FC } from 'react'
import style from './Profile.module.scss'
import avatar from 'assets/images/avatar.png'
import { Posts } from './Posts'
import { ProfileData } from './ProfileData'
import { useSelector } from 'react-redux'
import { selectIsAuth } from 'store/selectors/auth'
import { Navigate } from 'react-router-dom'
import { Path } from 'enums'

export const Profile: FC = () => {

	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Navigate to={Path.login} />
	}

	return (
		<div className={style.profile}>
			<div className={style.person}>
				<img src={avatar} />
				<div className={style.name}>ZaM</div>
				<span className={style.status}>Set status</span>
				<input type={'file'} />
			</div>
			<ProfileData />
			<Posts />
		</div>
	)
}
