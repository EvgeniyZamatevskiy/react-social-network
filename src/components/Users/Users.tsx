import { Pagination } from 'components/common/Pagination/Pagination'
import { Path } from 'enums'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from 'store/selectors/auth'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { SearchUsers } from './SearchUsers/SearchUsers'
import { User } from './User/User'
import style from './Users.module.scss'

type UsersPropsType = {

}

export const Users: FC<UsersPropsType> = (): ReturnComponentType => {

	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Navigate to={Path.login} />
	}

	return (
		<div className={style.users}>
			<div className={style.content}>
				<div>
					<h2>Developers</h2>
					<SearchUsers />
				</div>
				<Pagination />
			</div>
			<User />
		</div>
	)
}
