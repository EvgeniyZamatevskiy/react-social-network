import React, { FC } from 'react'
import style from './Profile.module.scss'
import user from 'assets/images/user.png'
import { Posts } from './Posts'
import { ProfileData } from './ProfileData'
import { useSelector } from 'react-redux'
import { selectIsAuth } from 'store/selectors/auth'
import { Navigate } from 'react-router-dom'
import { Path } from 'enums'

type ProfilePropsType = {

}

export const Profile: FC<ProfilePropsType> = ({ }) => {

	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Navigate to={Path.login} />
	}

	return (
		<div className={style.profile}>
			<div className={style.person}>
				<img src={user} />
				<div className={style.name}>ZaM</div>
				<span className={style.status}>Set status</span>
				<input type='file' />
			</div>
			<ProfileData />
			<Posts />
		</div>
	)
}
