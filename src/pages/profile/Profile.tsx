import { Path } from 'enums'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from 'store/selectors/auth'
import { ReturnComponentType } from 'types'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {

	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	return (
		<div className={style.profile}>
			Profile
		</div>
	)
}
