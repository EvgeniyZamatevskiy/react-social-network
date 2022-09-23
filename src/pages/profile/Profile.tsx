import React, { FC } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { selectIsAuth } from 'store/selectors'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {

	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	return (
		<div className={style.container}>
			<div className={style.profile}>
				<div className={style.leftBlock}>
					<div className={style.avatarContainer}>
						<img className={style.avatar} src={defaultAvatar} alt='avatar' />
						<div className={style.editLink}>
							<Link to={Path.EDIT}>Edit</Link>
						</div>
					</div>
				</div>

				<div className={style.rightBlock}>

				</div>
			</div>
		</div>
	)
}
